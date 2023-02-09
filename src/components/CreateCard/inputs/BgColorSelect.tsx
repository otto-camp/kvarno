import { Dispatch, SetStateAction } from 'react';

function BgColorSelect({
  bgColor,
  setBgColor,
}: {
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <p className="mx-2 font-medium">Background Color</p>
      <div className="mx-2 my-2 flex cursor-pointer flex-row justify-between rounded-lg border border-black bg-white px-2 py-1">
        <label htmlFor="bgColor" className="w-full font-medium">
          {bgColor}
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
            className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[30px] rounded-lg border border-black"
          />
        </div>
      </div>
    </>
  );
}

export default BgColorSelect;
