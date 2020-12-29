import React from 'react';
import { Sprite, useTick } from '@inlet/react-pixi';
const { useState } = React;

const TestComponent = () => {
  const [rotation, setRotation] = useState(0);
  
  useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

  return (
    <Sprite 
      image="./yuru.jpg" 
      anchor={0.5} 
      scale={0.5} 
      rotation={rotation}
      x={100}
      y={100}
    />
  );
};

export default TestComponent;