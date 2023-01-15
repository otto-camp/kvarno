import { Dispatch, SetStateAction } from 'react';

function BgColorSelect({
  bgColor,
  setBgColor,
}: {
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mx-2 my-2 rounded-lg px-2 py-1 flex flex-row justify-between border border-black bg-white cursor-pointer">
      <label htmlFor="bgColor" className="font-medium w-full">
        {bgColor === '#000000' ? 'Select color' : bgColor}
      </label>
      <div className="relative">
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          id="bgColor"
          className="opacity-0"
        />
        <div
          style={{ backgroundColor: bgColor }}
          className="absolute top-0 right-0 w-2/3 h-full rounded-full z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default BgColorSelect;
