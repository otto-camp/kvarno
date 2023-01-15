import { Dispatch, SetStateAction } from 'react';

function HeightInput({
  height,
  setHeight,
}: {
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="relative mx-2 sm:w-full">
      <label className="font-medium mb-2" htmlFor="Height">
        Height
      </label>
      <span className="underline">{height}</span>
      <input
        id="Height"
        type="range"
        className="block w-full accent-slate-100 bg-gray-200 rounded-lg cursor-pointer"
        min={100}
        max={300}
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
    </div>
  );
}

export default HeightInput;
