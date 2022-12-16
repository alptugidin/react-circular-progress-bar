import React, { useEffect, useState } from 'react';
import { FlatPath } from '../lib';
import CodeHighlighter from './components/CodeHighlighter/CodeHighlighter';
import FlatDemo from './components/FlatDemo/FlatDemo';
import FlatPathDemo from './components/FlatPathDemo/FlatPathDemo';
import HeatDemo from './components/HeatDemo/HeatDemo';
import { template } from './features/jsTemplate';
const App: React.FC = () => {
  const [progress, setProgress] = useState(100);
  const [width, setWidth] = useState(200);
  const [radiusRatio, setRadiusRatio] = useState(0);
  return (
    <div className='p-2 flex gap-10'>
      {/* <FlatDemo/> */}
      {/* <HeatDemo/> */}
      <div className='bg-[#282C34] w-1/2'>
        <CodeHighlighter>
          {template}
        </CodeHighlighter>
      </div>
    </div>
  );
};

export default App;
