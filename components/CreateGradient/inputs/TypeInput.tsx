import { Dispatch, SetStateAction } from 'react';

function TypeInput({
  type,
  setType,
}: {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="col-span-2 mx-2 mb-2 rounded-lg py-1">
      <label htmlFor="First Color Position" className="mb-1 block font-medium">
        Position
      </label>
      <select
        id="First Color Position"
        value={type}
        onChange={(e) => setType(e.currentTarget.value)}
        className="w-full rounded-lg border border-black px-2 py-1.5 text-center"
      >
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
      </select>
    </div>
  );
}

export default TypeInput;
