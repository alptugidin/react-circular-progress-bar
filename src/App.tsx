import React, { useState } from 'react';
import { FlatCanvas } from '../lib';
import FlatDemo from './components/FlatDemo/FlatDemo';
import HeatDemo from './components/HeatDemo/HeatDemo';
const App: React.FC = () => {
  const [progress, setProgress] = useState(100);
  const [width, setWidth] = useState(200);
  const [radiusRatio, setRadiusRatio] = useState(0);
  return (
    <div className='p-2 flex gap-10'>
      <FlatDemo/>
      <HeatDemo/>
    </div>
  );
};

export default App;
