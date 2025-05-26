"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import CustomInputScreen from "./CustomInputScreen";
import MonacoCodeEditor from "./MonacoCodeEditor";
import OutputScreen from "./OutputScreen";
import usePusher from "../app/hooks/usePusher";


type ClientPlaygroundProps = {
  roomId: string;
};

export default function ClientPlayground({ roomId }: ClientPlaygroundProps) {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const { data: session } = useSession();
  const user = session?.user?.name || "Unknown";

  usePusher({
    roomId,
    onCodeChange: (incomingCode: string, sender: string) => {
      if (sender !== user) {
        setCode(incomingCode);
      }
    },
  });

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);

    fetch("/api/pusher/code-update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId,
        code: newCode,
        user,
      }),
    });
  };

  const handleRun = () => {
    setOutput(input);
  };

  return (
    <div className="flex flex-col items-end justify-start min-h-screen bg-[#0d0f17] py-8 space-y-4">
      <MonacoCodeEditor
        code={code}
        setCode={handleCodeChange}
        onRunClick={handleRun}
      />
      <div className="flex flex-row gap-4">
        <CustomInputScreen input={input} setInput={setInput} />
        <OutputScreen output={output} />
      </div>
    </div>
  );
}
