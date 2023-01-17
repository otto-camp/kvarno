import { Dispatch, SetStateAction } from 'react';
function TextColorSelect({
  textColor,
  setTextColor,
}: {
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <p className="mx-2 mb-2 font-medium">Text Color</p>
      <div className="mx-2 my-2 flex cursor-pointer flex-row justify-between rounded-lg border border-black bg-white px-2 py-1">
        <label htmlFor="Text Color" className="w-full font-medium">
          {textColor}
        </label>
        <div className="relative">
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            id="Text Color"
            className="opacity-0"
          />
          <div
            style={{ backgroundColor: textColor }}
            className="pointer-events-none absolute top-0 right-0 z-10 h-full w-2/3 rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default TextColorSelect;
