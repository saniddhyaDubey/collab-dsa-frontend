// #Currently, Python is the default language - and the Language ID for that is:
// {
//     "id": 109,
//     "name": "Python (3.13.2)"
//   }
//-------------------------------------------------------------------------------

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

async function checkStatus(token: string){
    const options = {
        method: "GET",
        url: process.env.RAPIDAPI_SUBMISSION_URL+"/"+token,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY
        },
    };

    try{
        const response = await axios.request(options);
        let statusId = response.data.status?.id;

        if (statusId === 1 || statusId === 2) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            return await checkStatus(token);
        } else{
            const outputData = atob(response.data.stdout);
            return outputData;
        }
    }catch(err){
        console.log("err", err);
        return new Error("some error: check console");
    }
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const { sourceCode, customInput } = body;

    const requestBodyData = {
        language_id: 109,
        source_code: btoa(sourceCode),
        stdin: btoa(customInput)
    };

    const options = {
        method: "POST",
        url: process.env.RAPIDAPI_SUBMISSION_URL,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY
        },
        data: requestBodyData
    };

    try {
        const response = await axios.request(options);
        const token = response.data.token;
        const outputData = await checkStatus(token);
        console.log("output screen data:", outputData);
        return NextResponse.json({ token: response.data.token, output: outputData }, { status: 200 });
    }catch(err: any){
        const error = err.response ? err.response.data : err;
        return NextResponse.json({ error }, { status: 500 });
    }
}
