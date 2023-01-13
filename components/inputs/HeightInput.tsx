import { Dispatch, SetStateAction } from "react";

function HeightInput({
  height,
  setHeight,
}: {
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 border rounded-lg p-2">
      <div className="flex justify-between items-center">
        <label htmlFor="height" className="font-bold text-lg">
          Enter Height
        </label>
        <span className="text-sm text-gray-200">0 means fit content</span>
      </div>
      <input
        id="height"
        type="number"
        defaultValue={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg"
      />
    </div>
  );
}

export default HeightInput;
