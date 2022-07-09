import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCode = ({ searchTerm, operator }) => {
  let stageObject = {};

  if (operator === "text") {
    stageObject = {
      text: {
        query: searchTerm,
        path: "name_long",
        fuzzy: { maxEdits: 1 },
      },
    };
  } else if (operator === "wildcard") {
    stageObject = {
      wildcard: {
        query: searchTerm,
        path: "name_long",
        allowAnalyzedField: true,
      },
    };
  } else if (operator === "autocomplete") {
    stageObject = {
      index: "autocomplete",
      autocomplete: {
        query: searchTerm,
        path: "name_long",
        fuzzy: { maxEdits: 1 },
      },
    };
  }

  const stageString = JSON.stringify(stageObject, null, 2);
  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <>
        <pre className="text-fuchsia-400 font-mono text-sm py-2 text-left">
          &#123; $search :
        </pre>
        <pre className="text-blue-500 font-mono text-sm py-2 pl-2 text-left">
          &#47; &#47; optional, defaults to "default"
        </pre>

        <pre className="text-yellow-200 font-mono text-sm py-2 pl-2 text-left">
          index: &#60; indexName &#62;
        </pre>

        <SyntaxHighlighter language="javascript" style={atomDark}>
          {stageString}
        </SyntaxHighlighter>
        <pre className="text-fuchsia-400 font-mono text-sm pl-2 text-left  font-bold">
          &#125;
        </pre>
      </>
    </div>
  );
};

export default SearchCode;
