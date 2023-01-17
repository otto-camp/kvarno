import { Dispatch, SetStateAction } from 'react';

function TextAlignSelect({
  textAlign,
  setTextAlign,
}: {
  textAlign: string;
  setTextAlign: Dispatch<SetStateAction<string>>;
}) {
  const options = ['left', 'center', 'right', 'justify'];

  return (
    <div className="mx-2 mb-2 rounded-lg">
      <label htmlFor="Text Align" className="font-medium ">
        Choose Text Align
      </label>

      <select
        id="Text Align"
        onChange={(e) => setTextAlign(e.currentTarget.value)}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TextAlignSelect;
