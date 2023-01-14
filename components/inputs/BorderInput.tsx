import { Dispatch, SetStateAction } from 'react';

function BorderInput({
  border,
  setBorder,
}: {
  border: number;
  setBorder: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 border rounded-lg p-2">
      <div className="flex justify-between items-center">
        <label htmlFor="border" className="font-bold text-lg">
          Enter Border
        </label>
        <span className="text-sm text-gray-200">0 means full width</span>
      </div>
      <input
        id="border"
        type="number"
        defaultValue={border}
        onChange={(e) => setBorder(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg"
      />
    </div>
  );
}

export default BorderInput;
