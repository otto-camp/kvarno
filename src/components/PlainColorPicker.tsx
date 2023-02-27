import { Dispatch, SetStateAction } from 'react';

export default function PlainColorPicker({
  name,
  value,
  setValue,
}: {
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <input
      type="color"
      value={value}
      aria-label={name}
      onChange={(event) => setValue(event.target.value)}
      id={name}
      className="h-20 w-20 md:w-32 md:h-32 rounded-full cursor-pointer"
    />
  );
}
