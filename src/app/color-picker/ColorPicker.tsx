'use client';
import expandHex from '#/src/libs/ExpandHexColor';
import chroma from 'chroma-js';
import invert from 'invert-color';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Dice from '../../../public/svg/Dice';

export default function ColorPicker() {
  const [color, setColor] = useState('#FF00FF');
  const [copy, setCopy] = useState(false);

  const colorInvert = useMemo(() => {
    const isValidHex = /^#[0-9A-F]{6}$/i.test(color);
    return isValidHex ? invert(color, true) : expandHex(color);
  }, [color]);

  function randomColor() {
    setColor(chroma.random().hex());
  }

  return (
    <section>
      <div className="relative w-full rounded-lg bg-white">
        <label
          htmlFor="inputColor"
          className="absolute top-0 left-0 text-transparent"
        >
          Input Color
        </label>
        <input
          type="text"
          value={color}
          id="inputColor"
          onChange={(e) => setColor(e.target.value)}
          className="w-fit rounded-lg py-4 px-4 text-xl font-medium text-black outline-none"
        />
        <div
          className="absolute top-0 right-0 mr-2 mt-1.5 h-12 w-12 rounded-xl"
          style={{ backgroundColor: color }}
        >
          <label
            htmlFor="chooseColor"
            className="absolute top-0 left-0 text-transparent"
          >
            Choose Color
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            id="chooseColor"
            className="opacity-0"
          />
        </div>
      </div>
      <div
        className="relative my-6 flex h-[200px] items-center justify-center rounded-lg"
        style={{ backgroundColor: color }}
      >
        <button onClick={randomColor} className="absolute top-2 right-2">
          <Dice />
        </button>
        <CopyToClipboard text={color}>
          <h2
            className="cursor-pointer text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: colorInvert }}
            onClick={() => {
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1000);
            }}
          >
            {copy ? 'copied' : color}
          </h2>
        </CopyToClipboard>
      </div>
      <div className="flex w-full justify-center">
        <Link
          className="w-full rounded-lg bg-blue-700 py-4 text-center text-2xl font-semibold underline decoration-4 underline-offset-8 duration-300 hover:bg-blue-800 hover:underline-offset-0 hover:transition-all"
          href={`/color-picker/${color.split('#')[1]}`}
        >
          Go To Details
        </Link>
      </div>
    </section>
  );
}
