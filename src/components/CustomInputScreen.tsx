"use client";

export default function CustomInputScreen({ input, setInput }: { input: string, setInput: (input: string)=>void }) {
    return (
        <div className="w-[24vw] h-[23vh] rounded-lg bg-[#0f1117] border border-[#1e222a] text-[#c3e88d] px-4 py-2 shadow-md flex flex-col">
            <h5 className="mb-2 font-mono text-sm text-[#c3e88d]">Custom Input:</h5>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent border-none resize-none outline-none font-mono text-sm text-[#c3e88d] placeholder:text-gray-500"
                placeholder="// Enter custom input here..."
            />
        </div>
    );
}
