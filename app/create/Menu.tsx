'use client';

import BgColorSelect from '#/components/inputs/BgColorSelect';
import HeightInput from '#/components/inputs/HeightInput';
import { Dispatch, SetStateAction } from 'react';
import WidthInput from '../../components/inputs/WidthInput';

function Menu({
  width,
  setWidth,
  height,
  setHeight,
  bgColor,
  setBgColor,
}: {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="bg-gray-800 p-2 rounded-lg">
      <WidthInput width={width} setWidth={setWidth} />
      <HeightInput height={height} setHeight={setHeight} />
      <BgColorSelect bgColor={bgColor} setBgColor={setBgColor} />
    </div>
  );
}

export default Menu;
