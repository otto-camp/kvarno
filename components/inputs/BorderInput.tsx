import { Dispatch, SetStateAction } from 'react';

function BorderInput({
  border,
  setBorder,
}: {
  border: number;
  setBorder: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 rounded-lg">
      <label htmlFor="border" className="font-medium">
        Enter Border
      </label>

      <input
        id="border"
        type="number"
        defaultValue={border}
        onChange={(e) => setBorder(Number(e.target.value))}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      />
    </div>
  );
}

export default BorderInput;
