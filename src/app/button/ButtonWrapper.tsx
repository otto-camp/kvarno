'use client';

import { ButtonContext } from '#/src/context/ButtonContext';
import { getRandomHexColor } from '#/src/libs/GetRandomHexColor';
import { useState } from 'react';
import { useMount } from 'react-use';
import ColorInput from '#/src/components/ColorInput';
import GetCssButton from '#/src/components/GetCssButton';
import NumberSlider from '#/src/components/NumberSlider';
import TextInput from '#/src/components/TextInput';
import Checkbox from '../../components/Checkbox';

export default function ButtonWrapper() {
  const [text, setText] = useState('Write Something');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [textSize, setTextSize] = useState(16);
  const [border, setBorder] = useState(true);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(10);
  const [bgColor, setBgColor] = useState('#864313');

  useMount(() => setBgColor(getRandomHexColor()));

  return (
    <ButtonContext.Provider
      value={{
        text,
        setText,
        textColor,
        setTextColor,
        textSize,
        setTextSize,
        border,
        setBorder,
        borderColor,
        setBorderColor,
        borderWidth,
        setBorderWidth,
        borderRadius,
        setBorderRadius,
        width,
        setWidth,
        height,
        setHeight,
        bgColor,
        setBgColor,
      }}
    >
      <section className="flex flex-col-reverse justify-between gap-4 md:flex-row">
        <div className="p-4">
          {/* Size */}
          <h2 className="text-xl font-medium">Size</h2>
          <hr className="my-2 border-white/50" />
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <NumberSlider
              value={width}
              setValue={setWidth}
              name="Width"
              min={0}
              max={100}
            />
            <NumberSlider
              value={height}
              setValue={setHeight}
              name="Height"
              min={0}
              max={60}
            />
            <ColorInput
              name="Background Color"
              value={bgColor}
              setValue={setBgColor}
            />
          </div>
          {/* Text */}
          <h2 className="text-xl font-medium">Text</h2>
          <hr className="my-2 border-white/50" />
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <TextInput name="Text" setValue={setText} value={text} />
            <NumberSlider
              value={textSize}
              setValue={setTextSize}
              name="Text Size"
              min={8}
              max={48}
            />
            <ColorInput
              name="Text Color"
              value={textColor}
              setValue={setTextColor}
            />
          </div>
          {/* Border */}
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">Border</h2>
            <Checkbox name="Border" value={border} setValue={setBorder} />
          </div>
          <hr className="my-2 border-white/50" />
          {border && (
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <NumberSlider
                value={borderWidth}
                name="Border Width"
                setValue={setBorderWidth}
                min={0}
                max={16}
              />
              <ColorInput
                name="Border Color"
                value={borderColor}
                setValue={setBorderColor}
              />
              <NumberSlider
                value={borderRadius}
                name="Border Radius"
                setValue={setBorderRadius}
                min={0}
                max={50}
              />
            </div>
          )}
          <div className="mx-auto md:w-2/5">
            <GetCssButton />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center p-4">
          <button
            style={
              border
                ? {
                    color: textColor,
                    fontSize: textSize,
                    border: 'solid',
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                    borderRadius: borderRadius,
                    paddingInline: width,
                    paddingBlock: height,
                    backgroundColor: bgColor,
                  }
                : {
                    color: textColor,
                    fontSize: textSize,
                    paddingInline: width,
                    paddingBlock: height,
                    backgroundColor: bgColor,
                  }
            }
          >
            {text}
          </button>
        </div>
      </section>
    </ButtonContext.Provider>
  );
}
