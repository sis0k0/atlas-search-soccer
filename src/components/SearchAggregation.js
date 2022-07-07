import React, { useState, useContext, useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchAggregation = ({ searchTerm }) => {
  let basicSearchObject = {
    text: {
      query: searchTerm,
      path: "long_name",
      fuzzy: {
        maxEdits: 2,
      },
    },
  };

  const searchString = JSON.stringify(basicSearchObject, null, 2);

  let mustCount = 0;
  let mustArray = [];
  let filterArray = []; // using filter for stars, borough, cuisine

  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-4 pt-10 text-sm">
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
      </>

      <>
        <pre className="text-blue-300 font-mono pl-2 text-left text-sm font-bold">
          &#123; compound :
        </pre>
        <pre className="text-blue-500 font-mono text-sm py-2 pl-2 text-left">
          &#47; &#47; must | mustNot | should | filter
        </pre>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {searchString}
        </SyntaxHighlighter>
      </>
    </div>
  );
};

export default SearchAggregation;
