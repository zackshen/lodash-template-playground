import { useState, useEffect } from 'react';
import _ from 'lodash';

interface RenderResult {
  result: string;
  error: string | null;
}

export function useTemplateRenderer(templateStr: string, variablesStr: string): RenderResult {
  const [result, setResult] = useState<RenderResult>({
    result: '',
    error: null
  });

  useEffect(() => {
    try {
      // Try to parse the variables as JSON
      let variables = {};
      try {
        variables = JSON.parse(variablesStr);
      } catch (e) {
        return setResult({
          result: '',
          error: 'Invalid JSON in variables: ' + (e instanceof Error ? e.message : String(e))
        });
      }
      
      // Try to compile and run the template
      try {
        const compiled = _.template(templateStr);
        const output = compiled(variables);
        setResult({
          result: output,
          error: null
        });
      } catch (e) {
        setResult({
          result: '',
          error: 'Template error: ' + (e instanceof Error ? e.message : String(e))
        });
      }
    } catch (e) {
      setResult({
        result: '',
        error: 'Unexpected error: ' + (e instanceof Error ? e.message : String(e))
      });
    }
  }, [templateStr, variablesStr]);

  return result;
}