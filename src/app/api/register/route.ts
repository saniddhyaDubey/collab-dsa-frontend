import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

// #POST function to handle post request for register endpoint
export async function POST(request: NextRequest){
    try{
        await dbConnect();
        const reqBody = await request.json();
        const { firstName, lastName, email, password } = reqBody;

        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            User: {
                name: savedUser.firstName + " " + savedUser.lastName,
                email: savedUser.email 
            }
        });
    }catch(e: any){
        return NextResponse.json({error: e.message}, {status: 500})
    }

}
