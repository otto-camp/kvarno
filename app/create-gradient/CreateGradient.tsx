'use client';

import GetCssButton from '#/components/CreateGradient/GetCssButton';
import GradientPreview from '#/components/CreateGradient/GradientPreview';
import DegreeInput from '#/components/CreateGradient/inputs/DegreeInput';
import SecondColorSelect from '#/components/CreateGradient/inputs/SecondColorInput';
import TypeInput from '#/components/CreateGradient/inputs/TypeInput';
import RandomButton from '#/components/CreateGradient/RandomButton';
import { GradientContext } from '#/context/GradientContext';
import { useRef, useState } from 'react';
import FirstColorSelect from '../../components/CreateGradient/inputs/FirstColorInput';

function CreateGradient() {
  const [firstColor, setFirstColor] = useState('#6D6C83');
  const [secondColor, setSecondColor] = useState('#3B7F99');
  const [firstColorPosition, setFirstColorPosition] = useState(0);
  const [secondColorPosition, setSecondColorPosition] = useState(100);
  const [degree, setDegree] = useState(90);
  const [type, setType] = useState('linear');

  const ref = useRef<HTMLDivElement>(null);

  return (
    <GradientContext.Provider
      value={{
        firstColor,
        setFirstColor,
        secondColor,
        setSecondColor,
        firstColorPosition,
        setFirstColorPosition,
        secondColorPosition,
        setSecondColorPosition,
        degree,
        setDegree,
        type,
        setType,
      }}
    >
      <div className="grid grid-cols-1 gap-8 text-black lg:grid-cols-2">
        <div ref={ref}>
          <GradientPreview />
        </div>
        <div className="rounded-lg bg-gray-200 p-2">
          <FirstColorSelect
            firstColor={firstColor}
            setFirstColor={setFirstColor}
            firstColorPosition={firstColorPosition}
            setFirstColorPosition={setFirstColorPosition}
          />
          <SecondColorSelect
            secondColor={secondColor}
            setSecondColor={setSecondColor}
            secondColorPosition={secondColorPosition}
            setSecondColorPosition={setSecondColorPosition}
          />
          <div className="mb-2 sm:grid sm:grid-cols-2">
            <TypeInput type={type} setType={setType} />
            <DegreeInput degree={degree} setDegree={setDegree} type={type} />
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <RandomButton
              setFirstColor={setFirstColor}
              setSecondColor={setSecondColor}
            />
            <GetCssButton divRef={ref}/>
          </div>
        </div>
      </div>
    </GradientContext.Provider>
  );
}

export default CreateGradient;
