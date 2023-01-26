'use client';

import { useState } from 'react';
import FirstColorPicker from '../../components/CreateMixer/FirstColorPicker';
import SecondColorPicker from '../../components/CreateMixer/SecondColorPicker';
import chroma from 'chroma-js';

function ColorMixer() {
  const [firstColor, setFirstColor] = useState('#FF0000');
  const [secondColor, setSecondColor] = useState('#0000FF');
  const [result, setResult] = useState(['']);

  const colorRange = chroma
    .scale([firstColor, secondColor])
    .mode('lab')
    .colors(12);

  return (
    <section className="flex flex-col justify-between gap-6 sm:flex-row">
      <div
        className="flex h-[200px] w-full items-center justify-center rounded-lg border sm:h-[580px] sm:w-2/5"
        style={{ backgroundColor: firstColor }}
      >
        <FirstColorPicker
          firstColor={firstColor}
          setFirstColor={setFirstColor}
        />
      </div>
      <div className="flex flex-col justify-around gap-2 rounded-lg sm:w-1/5">
        {colorRange.slice(1, 11).map((color) => (
          <div
            key={color}
            className="h-[50px] w-full rounded-lg border"
            style={{ backgroundColor: color }}
          >
            <p className="text-center text-xl font-bold">{color}</p>
          </div>
        ))}
      </div>
      <div
        className="flex h-[200px] w-full items-center justify-center rounded-lg border sm:h-[580px] sm:w-2/5"
        style={{ backgroundColor: secondColor }}
      >
        <SecondColorPicker
          secondColor={secondColor}
          setSecondColor={setSecondColor}
        />
      </div>
    </section>
  );
}

export default ColorMixer;
