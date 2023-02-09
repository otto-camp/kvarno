import { Dispatch, SetStateAction } from 'react';

function TextSizeInput({
  textSize,
  setTextSize,
}: {
  textSize: number;
  setTextSize: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label htmlFor="Text Size" className="mb-2 block font-medium">
        Text Size
      </label>

      <input
        id="Text Size"
        type="number"
        defaultValue={textSize}
        onChange={(e) => setTextSize(Number(e.target.value))}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      />
    </div>
  );
}

export default TextSizeInput;
