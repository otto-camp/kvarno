import { Dispatch, SetStateAction } from 'react';
function TextDecorationStyleSelect({
  textDecorationStyle,
  setTextDecorationStyle,
}: {
  textDecorationStyle: string;
  setTextDecorationStyle: Dispatch<SetStateAction<string>>;
}) {
  const options = ['solid', 'double', 'dotted', 'dashed', 'wavy'];
  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label className="mb-2 block font-medium" htmlFor="Text Style">
        Text Decoration Style
      </label>
      <select
        id="Text Style"
        value={textDecorationStyle}
        onChange={(e) => setTextDecorationStyle(e.currentTarget.value)}
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

export default TextDecorationStyleSelect;
