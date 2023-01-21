import { Dispatch, SetStateAction } from 'react';
function DegreeInput({
  degree,
  setDegree,
  type,
}: {
  degree: number;
  setDegree: Dispatch<SetStateAction<number>>;
  type: string;
}) {
  const options = [
    '0',
    '30',
    '45',
    '60',
    '75',
    '90',
    '120',
    '150',
    '225',
    '275',
    '315',
    '360',
  ];
  return (
    <>
      {type === 'linear' && (
        <div className="mx-2 mb-2 rounded-lg py-1">
          <label
            htmlFor="First Color Position"
            className="mb-1 block font-medium"
          >
            Position
          </label>
          <select
            id="First Color Position"
            value={degree}
            onChange={(e) => setDegree(Number(e.currentTarget.value))}
            className="w-full rounded-lg border border-black px-2 py-1.5 text-center"
          >
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default DegreeInput;
