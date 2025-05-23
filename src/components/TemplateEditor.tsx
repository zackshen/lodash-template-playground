import { Info } from "lucide-react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup-templating";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Editor from "react-simple-code-editor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TemplateEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({ value, onChange }) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
          Template
        </h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Available variables:
              </p>
              <ul className="mt-1 list-disc list-inside text-xs text-gray-500 dark:text-gray-400">
                <li>
                  <code>from</code>: Source information (type and values)
                </li>
                <li>
                  <code>to</code>: Destination information (type and values)
                </li>
                <li>
                  <code>datasource</code>: Data source details (type and values)
                </li>
                <li>
                  <code>time</code>: Timing information (start, end, text)
                </li>
                <li>
                  <code>intent</code>: Purpose or intent string
                </li>
                <li>
                  <code>locations</code>: Array of location objects (type,
                  display, value)
                </li>
              </ul>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="border rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-900 transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary">
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={(code) => highlight(code, languages.markup, "markup")}
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
    </div>
  );
};

export default TemplateEditor;
