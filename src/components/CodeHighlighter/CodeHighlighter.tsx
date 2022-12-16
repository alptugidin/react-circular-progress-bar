import React, { StrictMode, useEffect, useRef } from 'react';
interface ICodeHighlighter {
   children: React.ReactNode
}
const CodeHighlighter: React.FC<ICodeHighlighter> = ({ children }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const stringChildrenX = children?.toString() ?? '';
  const stringChildren = stringChildrenX.replaceAll('=', '@@@@@');
  const splitted = stringChildren.split('\n');
  const lineArr: string[] = [];
  splitted.pop();
  splitted.shift();
  for (let j = 0; j < splitted.length; j++) {
    const regex = /var([^;]*);/g;

    const wordSplit = splitted[j].split(' ');
    for (let i = 0; i < wordSplit.length; i++) {
      // wordSplit[i] = wordSplit[i].replaceAll(/var/g, '<span class="variable">var</span>');
      // wordSplit[i] = wordSplit[i].replaceAll(/let/g, '<span class="variable">let</span>');
      // wordSplit[i] = wordSplit[i].replaceAll(/const/g, '<span class="variable">const</span>');
      // wordSplit[i] = wordSplit[i].replaceAll(/@@@@@/g, '<span class="operators">=</span>');
      const _var = wordSplit[i].match(/var/g);
      if (_var) {
        console.log(_var);
        if (splitted[j].endsWith(';')) {
          console.log(splitted[j]);
        }
      }
      const _let = wordSplit[i].match(/let/g);
      if (_let) {
        console.log(_let);
      }
      const _const = wordSplit[i].match(/const/g);
      if (_const) {
        console.log(_const);
      }
    }

    // console.log(splitted[j].match(/var([^;]*);/g));
    // splitted[j] = splitted[j].replaceAll(regex, '<span class="global">alp</span>');

    // console.log(wordSplit.join(' '));

    lineArr.push(wordSplit.join(' '));
  }
  // splitted.forEach(line => {
  //   const wordSplit = line.split(' ');

  //   for (let i = 0; i < wordSplit.length; i++) {
  //     wordSplit[i] = wordSplit[i].replaceAll(/var/g, '<span class="variable">var</span>');
  //     wordSplit[i] = wordSplit[i].replaceAll(/let/g, '<span class="variable">let</span>');
  //     wordSplit[i] = wordSplit[i].replaceAll(/const/g, '<span class="variable">const</span>');
  //     wordSplit[i] = wordSplit[i].replaceAll(/@@@@@/g, '<span class="operators"> = </span>');
  //   }
  //   lineArr.push(wordSplit.join(' '));
  // });

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.innerHTML = lineArr.join('\n');
    }
  }, []);
  return (
    <div ref={mainRef} className='whitespace-pre font-mono'>
      {stringChildren}
    </div>
  );
};

export default CodeHighlighter;
