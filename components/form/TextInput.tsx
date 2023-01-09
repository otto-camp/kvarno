import { InputProps } from './form';

function TextInput({ placeholder, label, tooltip }: InputProps) {
  return (
    <>
      {tooltip ? (
        <div className="flex flex-row gap-2">
          <label className="block font-bold mb-2">{label}</label>
          <div className="tooltip" data-tip="Choose between 400-800">
            <i className="p-0 m-0">
              <svg
                aria-haspopup="true"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#A0AEC0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
                <polyline points="11 12 12 12 12 16 13 16" />
              </svg>
            </i>
          </div>
        </div>
      ) : (
        <label className="block font-bold mb-2">{label}</label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-lg py-2 px-3 text-black focus:border-blue-600 focus:outline-none"
      />
    </>
  );
}

export default TextInput;
