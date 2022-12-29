import React, { useEffect, useState } from 'react';
import { Flat, Heat, Nested } from '../lib';
import FlatDemo from './components/FlatDemo/FlatDemo';
import Header from './components/Header';
import HeatDemo from './components/HeatDemo/HeatDemo';
import NestedDemo from './components/NestedDemo/NestedDemo';
const App: React.FC = () => {
  const [randomValue, setRandomValue] = useState(50);
  const [randomMoney, setRandomMoney] = useState(500);
  const [randomNestedValue, setrandomNestedValue] = useState({ v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 });
  useEffect(() => {
    setInterval(() => {
      setRandomValue(Math.floor(Math.random() * 100));
      setRandomMoney(Math.floor(Math.random() * 1500));
      setrandomNestedValue({
        v1: Math.floor(Math.random() * 100),
        v2: Math.floor(Math.random() * 100),
        v3: Math.floor(Math.random() * 100),
        v4: Math.floor(Math.random() * 100),
        v5: Math.floor(Math.random() * 100)
      });
    }, 2000);
  }, []);
  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='h-screen flex flex-col justify-center'>
        <div className='p-2 flex flex-wrap gap-x-48 gap-y-20 justify-center mb-40 mt-10 py-20 '>
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
                bgColor: '#dadada',
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
                barColor: '#0284c7',
                strokeLinecap: 'butt',
                valueAnimation: false
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
              revertBackground={true}
              sx={{
                shape: 'half',
                bgColor: '#efefef',
                barWidth: 7,
                valueColor: 'green',
                valueSize: 20,
                valueFamily: 'Calibri'
              }}
            />
          </div>
          <div className='w-40'>
            <Nested
              circles={[
                { text: 'Javascript', value: randomNestedValue.v1, color: '#fde047' },
                { text: 'Typescript', value: randomNestedValue.v2, color: '#0ea5e9' },
                { text: 'HTML', value: randomNestedValue.v3, color: '#c2410c' },
                { text: 'CSS', value: randomNestedValue.v4, color: '#7c3aed' },
                { text: 'SASS', value: randomNestedValue.v5, color: '#c026d3' }
              ]}
              sx={{
                bgColor: '#cbd5e1'
              }}
            />
          </div>
        </div>
      </div>
      <div className='p-2 flex flex-wrap gap-y-48 justify-center gap-20'>
        <FlatDemo/>
        <HeatDemo/>
        <NestedDemo/>
      </div>
    </div>
  );
};

export default App;
