'use client';

import ExtractHTMLModal from '#/components/ExtractHTMLModal';
import BgColorSelect from '#/components/inputs/BgColorSelect';
import BorderInput from '#/components/inputs/BorderInput';
import BorderRadius from '#/components/inputs/BorderRadius';
import HeightInput from '#/components/inputs/HeightInput';
import { Dispatch, SetStateAction, useState } from 'react';
import WidthInput from '../../components/inputs/WidthInput';

function Menu({
  width,
  setWidth,
  height,
  setHeight,
  bgColor,
  setBgColor,
  border,
  setBorder,
  radius,
  setRadius,
}: {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
  border: number;
  setBorder: Dispatch<SetStateAction<number>>;
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}) {
  const [extractHTMLModal, setExtractHTMLModal] = useState(false);
  return (
    <>
      <div className="bg-gray-800 p-2 rounded-lg">
        <WidthInput width={width} setWidth={setWidth} />
        <HeightInput height={height} setHeight={setHeight} />
        <BgColorSelect bgColor={bgColor} setBgColor={setBgColor} />
        <BorderInput border={border} setBorder={setBorder} />
        <BorderRadius radius={radius} setRadius={setRadius} />
        <button
          className="px-3 py-1 border rounded-lg mx-2"
          onClick={() => setExtractHTMLModal(true)}
        >
          Get HTML
        </button>
      </div>

      <ExtractHTMLModal
        width={width}
        height={height}
        bgColor={bgColor}
        border={border}
        radius={radius} 
        extractHTMLModal={extractHTMLModal}
        setExtractHTMLModal={setExtractHTMLModal}
      />
    </>
  );
}

export default Menu;
