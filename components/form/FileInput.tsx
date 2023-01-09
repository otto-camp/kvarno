import { FileInputProps } from './form';

function FileInput({ label, accept }: FileInputProps) {
  return (
    <div className="mb-4 relative overflow-hidden">
      <label htmlFor={label} className="block font-bold mb-2">
        {label}
      </label>
      <button className="py-2 px-3 inline-flex justify-center w-full rounded-lg border bg-white text-black focus:border-blue-600 focus:outline-none">
        <label htmlFor={label} className="ml-2">
          {label}
        </label>
      </button>
      <input
        id={label}
        type="file"
        className="w-full absolute block opacity-0 cursor-pointer py-2 px-3 m-0 top-0 left-0"
        accept={accept}
      />
    </div>
  );
}

export default FileInput;
