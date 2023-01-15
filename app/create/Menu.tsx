'use client';

import ExtractCardModal from '#/components/ExtractCardModal';
import BgColorSelect from '#/components/inputs/BgColorSelect';
import BorderColors from '#/components/inputs/BorderColors';
import BorderInput from '#/components/inputs/BorderInput';
import BorderRadius from '#/components/inputs/BorderRadius';
import HeightInput from '#/components/inputs/HeightInput';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import WidthInput from '../../components/inputs/WidthInput';
import { useCardContext } from '../../context/CardContext';

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
  } = useCardContext();
  return (
    <>
      <div className="bg-gray-800 p-2 rounded-lg">
        <div className="rounded-lg bg-purple-200 text-black m-2 px-2">
          <Disclosure>
            <Disclosure.Button className="w-full my-2 px-2 py-1 rounded-lg bg-purple-100 font-medium text-purple-900 transition-colors hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              Dimensions
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2">
              <div className="flex flex-col sm:flex-row">
                <WidthInput width={width} setWidth={setWidth} />
                <div className="h-[2px] bg-zinc-500 m-2 rounded-full" />
                <HeightInput height={height} setHeight={setHeight} />
              </div>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="rounded-lg bg-purple-200 text-black m-2 px-2">
          <Disclosure>
            <Disclosure.Button className="w-full my-2 px-2 py-1 rounded-lg bg-purple-100 font-medium text-purple-900 transition-colors hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              Background Color
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2">
              <BgColorSelect bgColor={bgColor} setBgColor={setBgColor} />
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="rounded-lg bg-purple-200 text-black m-2 px-2">
          <Disclosure>
            <Disclosure.Button className="w-full my-2 px-2 py-1 rounded-lg bg-purple-100 font-medium text-purple-900 transition-colors hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              Border
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2">
              <BorderInput border={border} setBorder={setBorder} />
              <BorderRadius radius={radius} setRadius={setRadius} />
              <BorderColors
                borderColor={borderColor}
                setBorderColor={setBorderColor}
              />
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="flex flex-col">
          <button
            className="px-3 py-1 border rounded-lg mx-2 text-black text-lg font-semibold bg-primary transition-opacity hover:bg-opacity-80"
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
