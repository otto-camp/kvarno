import { Dispatch, SetStateAction } from 'react';

export default function PlainNumberSlider({
  name,
  min,
  max,
  step,
  defaultValue,
  value,
  setValue,
}: {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) {
  return (
    <input
      type="range"
      id={name}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue ?? value}
      onChange={(event) => setValue(event.target.valueAsNumber)}
      className="range range-primary range-xs w-[80px] md:w-[128px]"
    />
  );
}
