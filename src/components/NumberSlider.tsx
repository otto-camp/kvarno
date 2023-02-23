'use client'
import { Dispatch, SetStateAction } from 'react';

export default function NumberSlider({
  name,
  min,
  max,
  value,
  setValue,
}: {
  name: string;
  min?: number;
  max?: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="form-control w-full justify-between">
      <label className="label p-0" htmlFor={name}>
        <span className="label-text-alt">{name}</span>
        <span className="label-text-alt">{value}</span>
      </label>
      <input
        type="range"
        id={name}
        min={min}
        max={max}
        defaultValue={value}
        onChange={(event) => setValue(event.target.valueAsNumber)}
        className="input-bordered input px-0"
      />
    </div>
  );
}
