import { Dispatch, SetStateAction } from 'react';

function BorderColors({
  borderColor,
  setBorderColor,
}: {
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mx-4 mt-6 mb-2 rounded-lg px-2 py-1 flex flex-row justify-between border border-black bg-white cursor-pointer">
      <label htmlFor="Border Color" className="font-medium w-full">
        {borderColor === '#000000' ? 'Select color' : borderColor}
      </label>
      <div className="relative">
        <input
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
          id="Border Color"
          className="opacity-0"
        />
        <div
          style={{ backgroundColor: borderColor }}
          className="absolute top-0 right-0 w-2/3 h-full rounded-full z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default BorderColors;
