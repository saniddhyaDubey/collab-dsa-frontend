"use client";

interface OutputScreenProps {
  output: string;
}

export default function OutputScreen({ output }: OutputScreenProps) {
  return (
    <div className="w-[23vw] h-[23vh] rounded-lg bg-[#0f1117] border border-[#1e222a] text-[#c3e88d] px-4 py-2 font-mono text-sm overflow-auto shadow-md">
        <h5>Output Screen:</h5>
      {output ? output : "// Output will appear here..."}
    </div>
  );
}
