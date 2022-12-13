import React, { useState } from 'react';
import FlatDemo from './components/FlatDemo/FlatDemo';
import HeatDemo from './components/HeatDemo/HeatDemo';
const App: React.FC = () => {
  return (
    <div className='p-2 flex gap-10'>
      <FlatDemo/>
      <HeatDemo/>
    </div>
  );
};

export default App;
