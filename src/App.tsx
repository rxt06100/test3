import { Stage, Sprite, useApp } from '@inlet/react-pixi';
import TestComponent from './components/TestComponent';
import * as PIXI from 'pixi.js';
import './App.css';

const width = 1000
const height = 500
const stageProps: object = {
  height,
  width,
  raf:false,
  renderOnComponentChange: true,
  options: {
    // transparent: true,
    antialias: true,
    backgroundColor: 0xeef1f5
  },
}
const baseWidth:number = 650;
const baseHeight:number = 433;
const basePoint:PIXI.Point = new PIXI.Point(width / 2 - baseWidth / 2, height / 2 - baseHeight / 2);


// ドラッグ可能オブジェクトがドラッグ終了後現在の座標を渡してくる
const onDragEndCheck = (point: PIXI.Point) => {
  console.log('ポイントだよ ', point.x, point.y);
  //座標が等しいか
  console.log('座標が等しいか', basePoint.equals(point));
  // 絵の範囲内か。接触判定でなくて座標でチェック
  if(
     basePoint.x <= point.x && 
     point.x <= basePoint.x + baseWidth &&
     basePoint.y <= point.y &&
     point.y <= basePoint.y + baseHeight
    ) {
    alert("範囲内だよ");
  }
}

function App() {
  return (
    <Stage {...stageProps}>
      <TestComponent stageWidth={width} stageHeight={height} onDragEndEvent={onDragEndCheck} />
      <Sprite image="./yuru.jpg" zIndex={-1} x={basePoint.x} y={basePoint.y} />
    </Stage>
  );
}

export default App;
