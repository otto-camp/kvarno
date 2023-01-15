import { Dispatch, SetStateAction } from 'react';

function BorderRadius({
  radius,
  setRadius,
}: {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 mb-2 rounded-lg p-2">
      <label htmlFor="radius" className="font-bold text-lg">
        Enter radius
      </label>

      <input
        id="radius"
        type="number"
        defaultValue={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg border border-black"
      />
    </div>
  );
}

export default BorderRadius;
