import Header from "./components/Header";
import TemplateEditor from "./components/TemplateEditor";
import TemplatePreview from "./components/TemplatePreview";
import VariableEditor from "./components/VariableEditor";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTemplateRenderer } from "./hooks/useTemplateRenderer";

export interface VariableStruct {
  from?: { type: string; value: string[] };
  to?: { type: string; value: string[] };
  datasource?: { type: string; value: string[] };
  time?: {
    start: string;
    end: string;
    text: string;
    start_ts_ms: number;
    end_ts_ms: number;
  };
  intent: string;
  locations: {
    type: "link";
    disp: string;
    value: string;
  }[];
}

// Example default value:
export const defaultVariables: VariableStruct = {
  from: { type: "", value: [] },
  to: { type: "", value: [] },
  datasource: { type: "", value: [] },
  time: {
    start: "",
    end: "",
    text: "",
    start_ts_ms: 0,
    end_ts_ms: 0,
  },
  intent: "",
  locations: [],
};

function App() {
  const [template, setTemplate] = useLocalStorage(
    "template",
    "<%= from.value.length > 0 && to.value.length > 0 %>"
  );
  const [variables, setVariables] = useLocalStorage(
    "variables",
    JSON.stringify(defaultVariables, null, 2)
  );

  const { result, error } = useTemplateRenderer(template, variables);

  const handleReset = () => {
    setTemplate("<%= from.value.length > 0 && to.value.length > 0 %>");
    setVariables(JSON.stringify(defaultVariables, null, 2));
  };

  return (
    <div className="min-h-screen transition-colors duration-200 bg-muted dark:bg-background">
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex justify-end mb-6 space-x-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-8">
            <TemplateEditor value={template} onChange={setTemplate} />
            <VariableEditor value={variables} onChange={setVariables} />
          </div>
          <div>
            <TemplatePreview result={result} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
