'use client';
import { useState } from 'react';
import { useCardContext } from '../../src/context/CardContext';
import { Disclosure } from '@headlessui/react';

import ExtractCardModal from '#/components/CreateCard/ExtractCardModal';
import BgColorSelect from '#/components/CreateCard/inputs/BgColorSelect';
import BorderColors from '#/components/CreateCard/inputs/BorderColors';
import BorderInput from '#/components/CreateCard/inputs/BorderInput';
import BorderRadius from '#/components/CreateCard/inputs/BorderRadius';
import HeightInput from '#/components/CreateCard/inputs/HeightInput';
import WidthInput from '../../components/CreateCard/inputs/WidthInput';

import TextAlignSelect from '#/components/CreateCard/inputs/TextAlignSelect';
import TextColorSelect from '#/components/CreateCard/inputs/TextColorSelect';
import TextInput from '#/components/CreateCard/inputs/TextInput';
import TextDecorationSelect from '#/components/CreateCard/inputs/TextDecorationSelect';
import TextDecorationStyleSelect from '#/components/CreateCard/inputs/TextDecorationStyleSelect';
import TextDecorationColorSelect from '#/components/CreateCard/inputs/TextDecorationColorSelect';
import TextDecorationThicknessInput from '../../components/CreateCard/inputs/TextDecorationThicknessInput';
import TextUnderlineOffsetInput from '#/components/CreateCard/inputs/TextUnderlineOffsetInput';
import TextSizeInput from '#/components/CreateCard/inputs/TextSizeInput';
import TextWeightSelect from '#/components/CreateCard/inputs/TextWeightSelect';

function Menu() {
  const [extractCardModal, setExtractCardModal] = useState(false);
  const {
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
    borderColor,
    setBorderColor,
    text,
    setText,
    textSize,
    setTextSize,
    textWeight,
    setTextWeight,
    textColor,
    setTextColor,
    textAlign,
    setTextAlign,
    textDecoration,
    setTextDecoration,
    textDecorationStyle,
    setTextDecorationStyle,
    textDecorationColor,
    setTextDecorationColor,
    textDecorationThickness,
    setTextDecorationThickness,
    textUnderlineOffset,
    setTextUnderlineOffset,
  } = useCardContext();

  return (
    <>
      <div className="rounded-lg bg-gray-800 p-2">
        <div className="m-2 rounded-lg bg-purple-200 px-2 text-black">
          <Disclosure defaultOpen>
            <Disclosure.Button className="my-2 w-full rounded-lg bg-purple-100 px-2 py-1 font-medium text-purple-900 transition-colors hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              Container
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2">
              <div className="flex flex-col sm:flex-row">
                <WidthInput width={width} setWidth={setWidth} />
                <div className="m-2 h-[2px] rounded-full bg-zinc-500" />
                <HeightInput height={height} setHeight={setHeight} />
              </div>
              <div className="m-2 h-[2px] rounded-full bg-zinc-500" />
              <BgColorSelect bgColor={bgColor} setBgColor={setBgColor} />
              <BorderInput border={border} setBorder={setBorder} />
              <BorderRadius radius={radius} setRadius={setRadius} />
              <BorderColors
                borderColor={borderColor}
                setBorderColor={setBorderColor}
              />
            </Disclosure.Panel>
          </Disclosure>
        </div>

        <div className="m-2 rounded-lg bg-purple-200 px-2 text-black">
          <Disclosure>
            <Disclosure.Button className="my-2 w-full rounded-lg bg-purple-100 px-2 py-1 font-medium text-purple-900 transition-colors hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              Text
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2">
              <TextInput text={text} setText={setText} />
              <TextSizeInput textSize={textSize} setTextSize={setTextSize} />
              <TextWeightSelect
                textWeight={textWeight}
                setTextWeight={setTextWeight}
              />
              <TextColorSelect
                textColor={textColor}
                setTextColor={setTextColor}
              />
              <TextAlignSelect
                textAlign={textAlign}
                setTextAlign={setTextAlign}
              />
              <TextDecorationSelect
                textDecoration={textDecoration}
                setTextDecoration={setTextDecoration}
              />
              {textDecoration === 'underline' && (
                <TextUnderlineOffsetInput
                  textUnderlineOffset={textUnderlineOffset}
                  setTextUnderlineOffset={setTextUnderlineOffset}
                />
              )}
              <TextDecorationStyleSelect
                textDecorationStyle={textDecorationStyle}
                setTextDecorationStyle={setTextDecorationStyle}
              />
              <TextDecorationColorSelect
                textDecorationColor={textDecorationColor}
                setTextDecorationColor={setTextDecorationColor}
              />
              <TextDecorationThicknessInput
                textDecorationThickness={textDecorationThickness}
                setTextDecorationThickness={setTextDecorationThickness}
              />
            </Disclosure.Panel>
          </Disclosure>
        </div>

        <div className="flex flex-col">
          <button
            className="mx-2 rounded-lg border bg-primary px-3 py-1 text-lg font-semibold text-black transition-opacity hover:bg-opacity-80"
            onClick={() => setExtractCardModal(true)}
          >
            Get HTML
          </button>
        </div>
      </div>

      <ExtractCardModal
        extractCardModal={extractCardModal}
        setExtractCardModal={setExtractCardModal}
      />
    </>
  );
}

export default Menu;
