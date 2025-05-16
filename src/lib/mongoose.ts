import mongoose from 'mongoose';

// #To prevent database choking, we are storing the connection in the global object so that during dev - we have a persistent connection
declare global { // #declare keyword is used here to extend the property of 'global' object - modify the actual type
    var mongooseConn : Promise<typeof mongoose> | null;
}

const MONGODB_URI: string = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

async function dbConnect(){
    // #if the connection is for the first time:
    if (!global.mongooseConn) {
        global.mongooseConn = mongoose.connect(MONGODB_URI, {dbName: "collabDSA"})
    }

    // #directly return the connection from global object:
    return global.mongooseConn;
}

export default dbConnect;
