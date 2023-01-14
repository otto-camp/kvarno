'use client';

import ExtractHTMLModal from '#/components/ExtractHTMLModal';
import BgColorSelect from '#/components/inputs/BgColorSelect';
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
}: {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}) {
  const [extractHTMLModal, setExtractHTMLModal] = useState(false);
  return (
    <>
      <div className="bg-gray-800 p-2 rounded-lg">
        <WidthInput width={width} setWidth={setWidth} />
        <HeightInput height={height} setHeight={setHeight} />
        <BgColorSelect bgColor={bgColor} setBgColor={setBgColor} />
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
        extractHTMLModal={extractHTMLModal}
        setExtractHTMLModal={setExtractHTMLModal}
      />
    </>
  );
}

export default Menu;
