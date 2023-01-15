import { Dispatch, SetStateAction } from 'react';

function BorderInput({
  border,
  setBorder,
}: {
  border: number;
  setBorder: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 rounded-lg p-2">
      <label htmlFor="border" className="font-bold text-lg">
        Enter Border
      </label>

      <input
        id="border"
        type="number"
        defaultValue={border}
        onChange={(e) => setBorder(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg border border-black"
      />
    </div>
  );
}

export default BorderInput;
