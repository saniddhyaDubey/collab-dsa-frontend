"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import { FaPlay, FaUndo, FaPaintBrush } from "react-icons/fa";

export default function MonacoCodeEditor(
    { 
        code, 
        setCode, 
        onRunClick 
    }: {
         code: string, 
         setCode: (code: string) => void, 
         onRunClick: () => void
        }
    ) {

    const handleEditorChange = (newValue: string | undefined) => {
        setCode(newValue || "");
    };

    const handleEditorMount = (editor: any, monaco: any) => {
        monaco.editor.defineTheme("voidtty", {
            base: "vs-dark",
            inherit: true,
            rules: [
                { token: "comment", foreground: "5cffe0" },
                { token: "keyword", foreground: "82aaff", fontStyle: "bold" },
                { token: "string", foreground: "c3e88d" },
                { token: "number", foreground: "f78c6c" },
                { token: "type", foreground: "ffcb6b" },
                { token: "function", foreground: "89ddff" },
            ],
            colors: {
                "editor.background": "#0f1117",
                "editor.lineHighlightBackground": "#1e222a",
                "editorCursor.foreground": "#5cffe0",
                "editorLineNumber.foreground": "#4b5263",
            },
        });

        monaco.editor.setTheme("voidtty");
    };

    return (
        <div className="flex rounded-lg overflow-hidden shadow-xl">
            {/* Code Editor Window */}
            <div className="w-[45vw] h-[70vh] bg-[#1e1e1e] rounded-l-lg">
                <Editor
                    height="100%"
                    defaultLanguage="python"
                    defaultValue={`# Start coding collaboratively...\n\n`}
                    value={code}
                    onMount={handleEditorMount}
                    theme="voidtty"
                    onChange={handleEditorChange}
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        padding: { top: 16 },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        lineNumbers: "on",
                        roundedSelection: true,
                        cursorBlinking: "smooth",
                        cursorStyle: "block"
                    }}
                />
            </div>

            {/* Right sidebar */}
            <div className="w-12 bg-gray-900 flex flex-col items-center justify-start py-6 space-y-7 rounded-r-lg">
                <button onClick={onRunClick} className="cursor-pointer text-white hover:text-green-400" title="Run Code">
                    <FaPlay size={18} />
                </button>
                <button className="cursor-pointer text-white hover:text-red-400" title="Reset Code">
                    <FaUndo size={18} />
                </button>
                <button className="cursor-pointer text-white hover:text-indigo-400" title="Style Brush">
                    <FaPaintBrush size={18} />
                </button>
            </div>
        </div>
    );
}
