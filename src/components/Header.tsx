import { FileText } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <FileText className="h-7 w-7 text-primary" />
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              Lodash Template Playground
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Debug and test your lodash templates with ease
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
