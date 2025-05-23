import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface TemplatePreviewProps {
  result: string;
  error: string | null;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ result, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!result) return;

    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
          Rendered Output
        </h2>
        {result && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            )}
          </button>
        )}
      </div>
      <div className="flex-1 min-h-[440px] border rounded-xl p-4 overflow-auto bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary">
        {error ? (
          <div className="text-red-500 dark:text-red-400 p-2 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="font-semibold">Error:</p>
            <pre className="mt-1 whitespace-pre-wrap font-mono text-sm">
              {error}
            </pre>
          </div>
        ) : (
          <div className="whitespace-pre-wrap transition-opacity duration-200 text-gray-800 dark:text-gray-200">
            {result || (
              <span className="text-gray-400 dark:text-gray-500 italic">
                The rendered output will appear here...
              </span>
            )}
          </div>
        )}
      </div>
      <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
        The rendered template output will update automatically as you type
      </div>
    </div>
  );
};

export default TemplatePreview;
