import React, { useEffect, useRef, useState } from 'react';
interface IFlatCanvas {
  progress: number
}
const FlatCanvas: React.FC<IFlatCanvas> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentWidthx = canvasRef.current?.parentElement?.offsetWidth as number;
  useEffect(() => {
    const canvas = canvasRef.current;
    const parentWidth = canvas?.parentElement?.offsetWidth as number;
    if (canvasRef.current) {
      const ctx = canvas?.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.arc(
          100,
          100,
          90,
          0,
          ((2 * Math.PI) / 360) * (progress * 3.6));
        ctx.lineWidth = 10;
        ctx.stroke();
      }
    }
  }, [progress, canvasRef.current?.parentElement?.offsetWidth]);
  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    // <canvas ref={canvasRef} width='200' height='200'/>
  );
};

export default FlatCanvas;
