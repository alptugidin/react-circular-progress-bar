import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import './style.css';
interface ICodeHighlighter {
  children: React.ReactNode
}
const CodeHighlighter: React.FC<ICodeHighlighter> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);
  return (
    <pre className={'language-jsx pt-1 pl-1 text-sm !mt-0 !overflow-hidden'}>
      <code>
        {children}
      </code>
    </pre>

  );
};

export default CodeHighlighter;
