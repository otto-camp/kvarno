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
      <label className="font-medium mb-2" htmlFor="Width">
        Width:
      </label>
      <span className="underline">{width}</span>
      <input
        id="Width"
        type="range"
        className="block w-full accent-slate-100 bg-gray-200 rounded-lg cursor-pointer"
        min={200}
        max={800}
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
    </div>
  );
}

export default WidthInput;
