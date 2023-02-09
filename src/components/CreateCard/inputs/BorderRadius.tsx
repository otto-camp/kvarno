import { Dispatch, SetStateAction } from 'react';

function BorderRadius({
  radius,
  setRadius,
}: {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 mb-2 rounded-lg">
      <label htmlFor="radius" className="font-medium">
        Enter radius
      </label>

      <input
        id="radius"
        type="number"
        defaultValue={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      />
    </div>
  );
}

export default BorderRadius;
