'use client';

import { NumberInputProps } from './form';

function NumberInput({
  defaultValue,
  label,
  tooltip,
  min,
  max,
  setVal,
}: NumberInputProps) {
  return (
    <div>
      {tooltip ? (
        <div className="flex flex-row justify-between gap-2">
          <label htmlFor={label} className="block font-bold mb-2">
            {label}
          </label>
          <label htmlFor={label} className="text-gray-300 text-sm">
            Minimum {min} - Maximum {max}
          </label>
        </div>
      ) : (
        <label className="block font-bold mb-2">{label}</label>
      )}
      <input
        id={label}
        type="number"
        onChange={(e) => setVal(Number(e.currentTarget.value))}
        defaultValue={defaultValue}
        className="w-full border rounded-lg py-2 px-3 text-black focus:border-blue-600 focus:outline-none"
      />
    </div>
  );
}
export default NumberInput;
