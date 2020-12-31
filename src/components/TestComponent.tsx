import { useState, useEffect } from 'react';
import { Sprite, useTick, useApp } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import React from 'react';

const TestComponent = (props:{stageWidth:number, stageHeight:number, onDragEndEvent:Function}) => {
  // const [rotation, setRotation] = useState(0);
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  const yuruWidth = 783;
  const yuruHeight = 740;
  const [x, setX] = useState(props.stageWidth/2);
  const [y, setY] = useState(props.stageHeight/2);
  const [isDraggable, setIsDraggable] = useState(false);
  const [targetData, setTargetData] = useState<any>(null);
  const app = useApp();
  app.stage.sortableChildren = true;
  //enterframe
  /* useTick(() => {
    x < props.stageWidth + (yuruWidth / 2) ? setX(x + 1) : setX(yuruWidth / -2);
  }); */

  // オンクリックの
  const onClickEvent = (e:PIXI.InteractionEvent) => {
    setIsDraggable(true);
    setTargetData(e.data);
  }
  // マウスムーブの
  const onMoveEvent = (e:PIXI.InteractionEvent) => {
    if(isDraggable && targetData !== null) {
      const position = targetData.getLocalPosition(app.stage);
      setX(position.x);
      setY(position.y);
    }
}
  // マウスアップの
  const onMouseUpEvent = (e:PIXI.InteractionEvent) => {
    if(targetData.getLocalPosition) {
      const position = targetData.getLocalPosition(app.stage);
      props.onDragEndEvent(new PIXI.Point(position.x, position.y));
      setIsDraggable(false);
      setTargetData(null);
    }
  }

  useEffect(() => {
    //マウントした時
    //ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      //アンマウント時にクリーンアップする時
      //ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return (
    <Sprite 
      image="./dorne_fpv.png" 
      anchor={0.5} 
      width={yuruWidth / 3}
      height={yuruHeight / 3}
      rotation={0}
      x={x}
      y={y}
      cacheAsBitmap={false}
      buttonMode={true}
      interactive={true}
      pointerdown={(e:PIXI.InteractionEvent) => onClickEvent(e)}
      pointermove={(e:PIXI.InteractionEvent) => onMoveEvent(e)}
      pointerup={(e:PIXI.InteractionEvent) => onMouseUpEvent(e)}
      pointerupoutside={(e:PIXI.InteractionEvent) => onMouseUpEvent(e)}
      zIndex={10}
    />
  );
};

export default TestComponent;