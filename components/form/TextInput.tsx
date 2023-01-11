import {
  convertFromCssToJss,
  getConvertedClasses,
} from '#/utils/GetCSSFromTailwind';
import { ChangeEvent } from 'react';
import { InputProps } from './form';

function TextInput({
  placeholder,
  label,
  tooltip,
  setVal,
  val,
  defaultValue,
}: InputProps) {
  const handleState = async (e: ChangeEvent<HTMLInputElement>) => {
    const css = getConvertedClasses(e.currentTarget.value);
    setVal(convertFromCssToJss(css));
  };

  return (
    <>
      <label htmlFor={label} className="block font-bold mb-2">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => handleState(e)}
        className="w-full border rounded-lg py-2 px-3 text-black focus:border-blue-600 focus:outline-none"
      />
    </>
  );
}

export default TextInput;
