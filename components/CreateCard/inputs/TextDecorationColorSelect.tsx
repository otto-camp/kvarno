import { Dispatch, SetStateAction } from 'react';

function TextDecorationColorSelect({
  textDecorationColor,
  setTextDecorationColor,
}: {
  textDecorationColor: string;
  setTextDecorationColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <p className="mx-2 mb-2 font-medium">Text Decoration Color</p>
      <div className="mx-2 mb-2 flex cursor-pointer flex-row justify-between rounded-lg border border-black bg-white px-2 py-1">
        <label
          className="block w-full font-medium"
          htmlFor="Text Decoration Color"
        >
          {textDecorationColor}
        </label>
        <div className="relative">
          <input
            type="color"
            value={textDecorationColor}
            onChange={(e) => setTextDecorationColor(e.target.value)}
            id="Text Decoration Color"
            className="opacity-0"
          />
          <div
            style={{ backgroundColor: textDecorationColor }}
            className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[30px] rounded-lg border border-black"
          />
        </div>
      </div>
    </>
  );
}

export default TextDecorationColorSelect;
