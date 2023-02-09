import { Dispatch, SetStateAction } from 'react';
function TextUnderlineOffsetInput({
  textUnderlineOffset,
  setTextUnderlineOffset,
}: {
  textUnderlineOffset: number;
  setTextUnderlineOffset: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label htmlFor="Text Underline Offset" className="mb-2 block font-medium">
        Text Underline Offset
      </label>

      <input
        id="Text Underline Offset"
        type="number"
        defaultValue={textUnderlineOffset}
        onChange={(e) => setTextUnderlineOffset(Number(e.target.value))}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      />
    </div>
  );
}

export default TextUnderlineOffsetInput;
