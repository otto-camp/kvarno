import { Dispatch, SetStateAction } from 'react';
export default function Checkbox({
  name,
  value,
  setValue,
}: {
  name: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>
      <label htmlFor={name}></label>
      <input
        type="checkbox"
        defaultChecked={value}
        className="checkbox"
        onChange={() => setValue(!value)}
      />
    </div>
  );
}
