import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

// #Typescript interface for the User Model:
export interface IUser extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

// #Mongoose Schema for User:
const userSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
    }, {
        timestamps: true
    }
);

// #Hashing the function before saving the user data:
userSchema.pre("save", async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// #Prevent model recompilation in development:
export default mongoose.models.Users || mongoose.model<IUser>("Users", userSchema);
