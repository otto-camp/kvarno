import { Dispatch, SetStateAction } from 'react';

function BorderColors({
  borderColor,
  setBorderColor,
}: {
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <p className="mx-2 font-medium">Border Color</p>
      <div className="mx-2 my-2 mb-2 flex cursor-pointer flex-row justify-between rounded-lg border border-black bg-white px-2 py-1">
        <label htmlFor="Border Color" className="w-full font-medium">
          {borderColor}
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
            className="pointer-events-none absolute top-0 right-0 z-10 h-full border border-black w-[30px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default BorderColors;
