import { Dispatch, SetStateAction } from 'react';

function SecondColorPicker({
  secondColor,
  setSecondColor,
}: {
  secondColor: string;
  setSecondColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative mx-2 my-2 w-fit cursor-pointer rounded-lg border border-black bg-white px-2 py-1">
      <label htmlFor="Second Color" className="text-black">
        {secondColor}
      </label>
      <input
        type="color"
        value={secondColor}
        onChange={(e) => setSecondColor(e.target.value)}
        id="Second Color"
        className="absolute -z-10 opacity-0"
      />
    </div>
  );
}

export default SecondColorPicker;
