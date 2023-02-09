import { Dispatch, SetStateAction } from 'react';

function TextDecorationSelect({
  textDecoration,
  setTextDecoration,
}: {
  textDecoration: string;
  setTextDecoration: Dispatch<SetStateAction<string>>;
}) {
  const options = ['none', 'underline', 'overline', 'line-through'];

  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label className="mb-2 block font-medium" htmlFor="Text Decoration">
        Text Decoration
      </label>
      <select
        id="Text Decoration"
        value={textDecoration}
        onChange={(e) => setTextDecoration(e.currentTarget.value)}
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

export default TextDecorationSelect;
