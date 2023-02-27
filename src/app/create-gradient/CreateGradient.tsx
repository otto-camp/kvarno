'use client';

import GetCssButton from '../../components/CreateGradient/GetCssButton';
import GradientPreview from '../../components/CreateGradient/GradientPreview';
import { GradientContext } from '#/src/context/GradientContext';
import { useRef, useState } from 'react';
import PlainColorPicker from '../../components/PlainColorPicker';
import PlainNumberSlider from '#/src/components/PlainNumberSlider';
import RandomButton from '#/src/components/CreateGradient/RandomButton';

function CreateGradient() {
  const [firstColor, setFirstColor] = useState('#6D6C83');
  const [secondColor, setSecondColor] = useState('#3B7F99');
  const [firstColorPosition, setFirstColorPosition] = useState<number>(0);
  const [secondColorPosition, setSecondColorPosition] = useState<number>(100);
  const [degree, setDegree] = useState<string | number>(90);

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
      }}
    >
      <section className="relative">
        <div ref={ref} className="absolute inset-0 isolate">
          <GradientPreview />
        </div>
        <div className="grid grid-cols-2">
          <div className="isolate flex flex-col items-center gap-4 p-4">
            <PlainColorPicker
              name="First Color"
              value={firstColor}
              setValue={setFirstColor}
            />
            <PlainNumberSlider
              name="First Color Position"
              value={firstColorPosition}
              defaultValue={firstColorPosition}
              setValue={setFirstColorPosition}
            />
          </div>
          <div className="isolate flex flex-col items-center gap-4 p-4">
            <PlainColorPicker
              name="Second Color"
              value={secondColor}
              setValue={setSecondColor}
            />
            <PlainNumberSlider
              name="Second Color Position"
              value={secondColorPosition}
              defaultValue={secondColorPosition}
              setValue={setSecondColorPosition}
            />
          </div>
          {/* <div className="flex flex-col gap-4 xs:flex-row">
          
          <ColorInput
          name="First Color"
              value={firstColor}
              setValue={setFirstColor}
            />

            <Select
              name="First Color Position"
              value={options}
              defaultValue={firstColorPosition}
              setValue={setFirstColorPosition}
            />
          </div>
          <div className="flex flex-col gap-4 xs:flex-row">
            <div className="flex-1">
              <ColorInput
                name="Second Color"
                value={secondColor}
                setValue={setSecondColor}
              />
            </div>
            <Select
              name="Second Color Position"
              value={options}
              defaultValue={secondColorPosition}
              setValue={setSecondColorPosition}
            />
          </div>
          <div className="flex items-center gap-4">
            <Select
              name="Degree"
              value={degreeOptions}
              setValue={setDegree}
              defaultValue={degree}
            />
            <RandomButton
              setFirstColor={setFirstColor}
              setSecondColor={setSecondColor}
            />
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <GetCssButton divRef={ref} />
          </div> */}
        </div>
      </section>
      <div className="mt-12 rounded-lg py-4">
        <RandomButton
          setFirstColor={setFirstColor}
          setSecondColor={setSecondColor}
        />
        <GetCssButton divRef={ref} />
      </div>
    </GradientContext.Provider>
  );
}

export default CreateGradient;
