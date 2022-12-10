import React from 'react';
import CircularProgressBar from '../lib';

const App: React.FC = () => {
  return (
    <div>
      <div className='w-48'>
        <CircularProgressBar value={75}/>
      </div>
    </div>
  );
};

export default App;
