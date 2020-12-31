import { Stage } from '@inlet/react-pixi';
import TestComponent from './components/TestComponent';

const width = 1000
const height = 500
const stageProps: object = {
  height,
  width,
  raf:false,
  renderOnComponentChange:true,
  options: {
    // transparent: true,
    antialias: true,
    backgroundColor: 0xeef1f5
  },
}

function App() {
  return (
    <Stage {...stageProps}>
      <TestComponent stageWidth={width} stageHeight={height} />
    </Stage>
  );
}

export default App;
