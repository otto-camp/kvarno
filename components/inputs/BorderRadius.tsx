import { Dispatch, SetStateAction } from 'react';

function BorderRadius({
  radius,
  setRadius,
}: {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 border rounded-lg p-2">
      <div className="flex justify-between items-center">
        <label htmlFor="radius" className="font-bold text-lg">
          Enter radius
        </label>
        <span className="text-sm text-gray-200">0 means full width</span>
      </div>
      <input
        id="radius"
        type="number"
        defaultValue={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg"
      />
    </div>
  );
}

export default BorderRadius;
