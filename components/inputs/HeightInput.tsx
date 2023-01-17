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
      <label className="mb-2 font-medium" htmlFor="Height">
        Height
      </label>
      <span className="underline">{height}</span>
      <input
        id="Height"
        type="range"
        className="block w-full cursor-pointer rounded-lg bg-gray-200 accent-slate-100"
        min={100}
        max={300}
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
      />
      <button className="text-blue-900" onClick={() => setHeight(300)}>
        Full Height
      </button>
    </div>
  );
}

export default HeightInput;
