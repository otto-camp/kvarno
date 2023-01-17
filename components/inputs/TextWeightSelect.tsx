import { Dispatch, SetStateAction } from 'react';
function TextWeightSelect({
  textWeight,
  setTextWeight,
}: {
  textWeight: string;
  setTextWeight: Dispatch<SetStateAction<string>>;
}) {
  const options = [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ];

  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label className="mb-2 block font-medium" htmlFor="Text Weight">
        Text Weight
      </label>
      <select
        id="Text Weight"
        value={textWeight}
        onChange={(e) => setTextWeight(e.currentTarget.value)}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TextWeightSelect;
