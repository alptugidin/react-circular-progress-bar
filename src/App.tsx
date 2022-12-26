import React from 'react';
import FlatDemo from './components/FlatDemo/FlatDemo';
import HeatDemo from './components/HeatDemo/HeatDemo';
import NestedDemo from './components/NestedDemo/NestedDemo';
const App: React.FC = () => {
  return (
    <div className='p-2 flex gap-10 '>
      <FlatDemo/>
      <HeatDemo/>
      <NestedDemo/>
    </div>
  );
};

export default App;
