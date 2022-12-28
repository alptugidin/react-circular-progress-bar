import React, { useEffect, useState } from 'react';
import { Flat, Heat } from '../lib';
import FlatDemo from './components/FlatDemo/FlatDemo';
import HeatDemo from './components/HeatDemo/HeatDemo';
import NestedDemo from './components/NestedDemo/NestedDemo';
const App: React.FC = () => {
  const [randomValue, setRandomValue] = useState(50);
  const [randomMoney, setRandomMoney] = useState(500);
  useEffect(() => {
    setInterval(() => {
      setRandomValue(Math.floor(Math.random() * 100));
    }, 2000);
    setInterval(() => {
      setRandomMoney(Math.floor(Math.random() * 1500));
    }, 2000);
  }, []);
  return (
    <div>
      <div className='p-2 flex flex-wrap gap-x-48 gap-y-20 justify-center mb-40 mt-10'>
        <div className='w-40'>
          <Flat
            progress={randomValue}
            text={'Match'}
            sx={{
              textSize: 20,
              barWidth: 5,
              barColor: '#ff0000'
            }}
          />
        </div>
        <div className='w-40'>
          <Flat
            progress={randomValue}
            showMiniCircle={false}
            sx={{
              barColor: '#16a34a',
              textSize: 20,
              strokeLinecap: 'square',
              barWidth: 5,
              valueAnimation: false
            }}
          />
        </div>
        <div className='w-40'>
          <Flat
            progress={randomValue}
            text={'Match'}
            showMiniCircle={false}
            sx={{
              barColor: '#111827',
              textSize: 20,
              strokeLinecap: 'square',
              barWidth: 10,
              loadingTime: 0,
              valueAnimation: false
            }}
          />
        </div>
        <div className='w-40'>
          <Flat
            progress={randomValue}
            sx={{
              miniCircleSize: 4,
              miniCircleColor: '#00f531',
              textColor: '#aeff00',
              valueFamily: 'Courier New',
              valueColor: '#fd6958',
              valueWeight: 'lighter',
              shape: 'threequarters',
              bgColor: '#ff0000',
              barWidth: 3,
              barColor: '#00f531'
            }}
          />
        </div>
        <div className='w-40'>
          <Flat
            progress={randomMoney}
            sign={{ position: 'start', value: '$' }}
            range={{ from: 0, to: 1500 }}
            showMiniCircle={false}
            sx={{
              shape: 'half',
              barWidth: 5,
              valueSize: 20,
              bgColor: '#d1d1d1',
              strokeLinecap: 'butt',
              valueAnimation: false,
              barColor: '#1d4ed8'
            }}
          />
        </div>
        <div className='w-40'>
          <Heat
            progress={randomValue}
            sign={{ value: '°', position: 'end' }}
            sx={{
              bgColor: '#ffffff',
              barWidth: 7,
              valueFamily: 'Courier New'
            }}
          />
        </div>
        <div className='w-40'>
          <Heat
            progress={randomValue}
            sign={{ value: 'psi', position: 'end' }}
            revertColor={true}
            sx={{
              shape: 'half',
              bgColor: '#efefef',
              barWidth: 7,
              valueColor: 'green',
              valueSize: 20,
              valueFamily: 'Arial'
            }}
          />
        </div>
      </div>
      <div className='p-2 flex flex-wrap gap-y-48 justify-evenly'>
        <FlatDemo/>
        <HeatDemo/>
        <NestedDemo/>
      </div>
    </div>
  );
};

export default App;
