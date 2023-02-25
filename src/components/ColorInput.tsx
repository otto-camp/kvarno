import { Dispatch, SetStateAction } from 'react';

export default function ColorInput({
  name,
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="form-control relative justify-between">
      <label htmlFor={`${name} Input`} className="label-text">
        {name}
      </label>
      <input
        type="text"
        id={`${name} Input`}
        className="input-bordered input rounded-lg"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div
        className="absolute top-7 right-2 h-8 w-8 rounded-full border"
        style={{ backgroundColor: value }}
      >
        <input
          type="color"
          value={value}
          aria-label={name}
          onChange={(event) => setValue(event.target.value)}
          id={name}
          className="opacity-0"
        />
      </div>
    </div>
  );
}
