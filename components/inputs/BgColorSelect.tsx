import { Dispatch, SetStateAction } from 'react';

import colors from '#/public/colors.json';

function BgColorSelect({
  bgColor,
  setBgColor,
}: {
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mx-2 my-2 border rounded-lg p-2">
      <label htmlFor="backgroundColor" className="block font-bold">
        Background Color
      </label>
      <select
        id="backgroundColor"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        className="rounded-lg w-full px-2 py-1"
      >
        {Object.entries(colors).map((c) => (
          <option
            value={c[1]}
            key={c[0]}
            style={{ backgroundColor: c[1] }}
          ></option>
        ))}
      </select>
      <hr className="my-2" />
      <label htmlFor="hexColor" className="block font-bold">
        Hex Color or Color name
      </label>
      <input
        id="hexColor"
        type="text"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        className="px-2 py-1 text-black w-full rounded-lg"
      />
    </div>
  );
}

export default BgColorSelect;
