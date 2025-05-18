"use client";

import { useState } from "react";
import CustomInputScreen from "./CustomInputScreen";
import MonacoCodeEditor from "./MonacoCodeEditor";
import OutputScreen from "./OutputScreen";

export default function ClientPlayground(){

    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleRun = () => {
        // const result = codeCompilation(code, input);
        setOutput(input);
    };

    return(
        <div className="flex flex-col items-end justify-start min-h-screen bg-[#0d0f17] py-8 space-y-4">
            <MonacoCodeEditor code={code} setCode={setCode} onRunClick={handleRun} />
            <div className="flex flex-row gap-4">
                <CustomInputScreen input={input} setInput={setInput} />
                <OutputScreen output={output} />
            </div>
        </div>
    );
}
