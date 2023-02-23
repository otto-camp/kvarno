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
      <label htmlFor={name} className="label-text">
        {name}
      </label>
      <input
        type="text"
        id={name}
        className="input-bordered input rounded-lg"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div
        className="absolute top-7 right-2 h-8 w-8 rounded-full border "
        style={{ backgroundColor: value }}
      >
        <label
          htmlFor={name}
          className="absolute inset-0 text-transparent"
        ></label>
        <input
          type="color"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          id={name}
          className="opacity-0"
        />
      </div>
    </div>
  );
}
