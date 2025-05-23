import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import React from "react";
import Editor from "react-simple-code-editor";

interface VariableEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const VariableEditor: React.FC<VariableEditorProps> = ({ value, onChange }) => {
  return (
    <div className="flex-1 min-h-[200px]">
      <h2 className="text-base font-medium mb-2 text-gray-900 dark:text-gray-100">
        Variables (JSON)
      </h2>
      <div className="border rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-900 transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary">
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={(code) => highlight(code, languages.json, "json")}
          padding={16}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            minHeight: "200px",
            backgroundColor: "transparent",
            color: "inherit",
          }}
          className="w-full font-mono text-gray-800 dark:text-gray-200 outline-none"
        />
      </div>
      <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
        Enter valid JSON object with the variables to use in your template
      </div>
    </div>
  );
};

export default VariableEditor;
