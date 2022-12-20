import React from 'react';

const Nested: React.FC = () => {
  return (
    <div>
      <svg viewBox='0 0 110 110'>
        <circle
          cx='55'
          cy='55'
          r='50'
          fill='none'
          stroke='#ff000090'
          strokeWidth={5}
        >
        </circle>
        <circle
          cx='55'
          cy='55'
          r='44'
          fill='none'
          stroke='#00800090'
          strokeWidth={5}
        >
        </circle>
        <circle
          cx='55'
          cy='55'
          r='38'
          fill='none'
          stroke='#0000ff90'
          strokeWidth={5}
        >
        </circle>
      </svg>
    </div>
  );
};

export default Nested;
