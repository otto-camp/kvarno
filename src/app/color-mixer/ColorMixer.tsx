'use client';

import { useState } from 'react';
import chroma from 'chroma-js';
import CopyToClipboard from 'react-copy-to-clipboard';

function ColorMixer() {
  const [firstColor, setFirstColor] = useState('#FF0000');
  const [secondColor, setSecondColor] = useState('#0000FF');
  const [copy, setCopy] = useState({ status: false, index: 0 });

  const colorRange = chroma
    .scale([firstColor, secondColor])
    .mode('lab')
    .colors(12);

  return (
    <section className="my-auto flex flex-col justify-between gap-6 sm:flex-row">
      <div
        className="h-[200px] w-full rounded-lg border sm:h-[600px] sm:w-2/5"
        style={{ backgroundColor: firstColor }}
      >
        <div className="flex h-[200px] w-full items-center justify-center sm:h-[600px]">
          <div className="relative mx-2 my-2 cursor-pointer rounded-lg border border-black bg-white px-2 py-1">
            <label htmlFor="First Color" className="cursor-pointer text-black">
              {firstColor}
            </label>
            <input
              type="color"
              value={firstColor}
              onChange={(e) => setFirstColor(e.target.value)}
              id="First Color"
              className="absolute top-0 left-0 -z-10 opacity-0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around gap-2 rounded-lg sm:w-1/5">
        {colorRange.slice(1, 11).map((color, index) => (
          <div
            key={color}
            className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-lg border"
            style={{ backgroundColor: color }}
            onClick={() => {
              setCopy({ status: true, index: index });
              setTimeout(() => {
                setCopy({ status: false, index: index });
              }, 1000);
            }}
          >
            <CopyToClipboard text={color}>
              <p className="text-center text-xl font-bold" key={index}>
                {index === copy.index && copy.status ? 'copied' : color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>

      <div
        className="flex h-[200px] w-full items-center justify-center rounded-lg border sm:h-[600px] sm:w-2/5"
        style={{ backgroundColor: secondColor }}
      >
        <div className="relative mx-2 my-2 rounded-lg border border-black bg-white px-2 py-1">
          <label htmlFor="Second Color" className="cursor-pointer text-black">
            {secondColor}
          </label>
          <input
            type="color"
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
            id="Second Color"
            className="absolute -z-10 opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

export default ColorMixer;
