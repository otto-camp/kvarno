import { SelectProps } from './form';

function Select({ val, setVal,options }: SelectProps) {
  return (
    <div>
      <label className="block font-bold mb-2">Font</label>
      <select
        onChange={(e) => setVal(e.currentTarget.value)}
        value={val}
        className="border rounded-lg w-full py-2 px-3 text-black"
        placeholder='Choose Text'
      >
        {options.map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
