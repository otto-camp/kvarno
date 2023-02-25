'use client';
import { Dispatch, SetStateAction } from 'react';

export default function TextInput({
  name,
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="form-control w-full justify-between">
      <label htmlFor={name} className="label-text">
        {name}
      </label>
      <input
        type="text"
        id={name}
        defaultValue={value}
        className="input-bordered input rounded-lg"
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
