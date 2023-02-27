import { Dispatch, SetStateAction } from 'react';

export default function Select({
  name,
  value,
  setValue,
  defaultValue,
}: {
  name: string;
  value: number[] | string[];
  setValue: Dispatch<SetStateAction<number | string>>;
  defaultValue?: string | number;
}) {
  return (
    <div className="form-control justify-between z-10">
      <label htmlFor={name} className="label-text font-medium">
        {name === 'Degree' ? 'Degree' : 'Position'}
      </label>
      <select
        id={name}
        name={name}
        aria-label={name}
        defaultValue={defaultValue}
        className="select-bordered select border border-black/50"
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {value.map((v) => (
          <option value={v} key={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}
