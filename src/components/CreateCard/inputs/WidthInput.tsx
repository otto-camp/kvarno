import { Dispatch, SetStateAction } from 'react';

function WidthInput({
  width,
  setWidth,
}: {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="relative mx-2 sm:w-full">
      <label className="mb-2 font-medium" htmlFor="Width">
        Width:
      </label>
      <span className="underline">{width}</span>
      <input
        id="Width"
        type="range"
        className="block w-full cursor-pointer rounded-lg bg-gray-200 accent-slate-100"
        min={200}
        max={800}
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
      <button className="text-blue-900" onClick={() => setWidth(0)}>
        Full width
      </button>
    </div>
  );
}

export default WidthInput;
