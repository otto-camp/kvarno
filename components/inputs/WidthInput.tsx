import { Dispatch, SetStateAction } from 'react';

function WidthInput({
  width,
  setWidth,
}: {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 my-2 border rounded-lg p-2">
      <div className='flex justify-between items-center'>
        <label htmlFor="width" className="font-bold text-lg">
          Enter width
        </label>
        <span className='text-sm text-gray-200'>0 means full width</span>
      </div>
      <input
        id="width"
        type="number"
        defaultValue={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        className="px-2 py-1 text-black w-full rounded-lg"
      />
    </div>
  );
}

export default WidthInput;
