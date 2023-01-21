import { Dispatch, SetStateAction } from 'react';

function FirstColorSelect({
  firstColor,
  setFirstColor,
  firstColorPosition,
  setFirstColorPosition,
}: {
  firstColor: string;
  setFirstColor: Dispatch<SetStateAction<string>>;
  firstColorPosition: number;
  setFirstColorPosition: Dispatch<SetStateAction<number>>;
}) {
  const options = [
    '0',
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
  ];

  return (
    <div className="grid grid-cols-3">
      <div className='col-span-2'>
        <p className="mx-2 mb-2 font-medium">First Color</p>
        <div className="mx-2 my-2 flex cursor-pointer flex-row justify-between rounded-lg border border-black bg-white px-2 py-1">
          <label htmlFor="First Color" className="w-full font-medium">
            {firstColor}
          </label>
          <div className="relative">
            <input
              type="color"
              value={firstColor}
              onChange={(e) => setFirstColor(e.target.value)}
              id="First Color"
              className="opacity-0"
            />
            <div
              style={{ backgroundColor: firstColor }}
              className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[30px] rounded-lg border border-black"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mx-2 mb-2 rounded-lg py-1">
          <label
            htmlFor="First Color Position"
            className="mb-1 block font-medium"
          >
            Position
          </label>
          <select
            id="First Color Position"
            value={firstColorPosition}
            onChange={(e) =>
              setFirstColorPosition(Number(e.currentTarget.value))
            }
            className="w-full text-center border border-black px-2 py-1.5 rounded-lg"
          >
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FirstColorSelect;
