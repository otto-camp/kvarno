import { ConvertToJSS } from '#/utils/ConvertToJSS';
import { SelectProps } from './form';

function Select({ val, setVal, options, label }: SelectProps) {
  function getStringAfterColon(input: string): string {
    let index = input.indexOf(':');
    if (index === -1) {
      return '';
    }
    return input.slice(index + 1).trim();
  }

  return (
    <div>
      <label htmlFor={label} className="block font-bold mb-2">
        {label}
      </label>
      <select
        id={label}
        onChange={(e) => setVal(e.currentTarget.value)}
        value={val}
        className="border rounded-lg w-full py-2 px-3 text-black"
        placeholder={label}
      >
        {options.map((o) => (
          <option key={o} value={o} style={ConvertToJSS(o)}>
            {getStringAfterColon(o)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
