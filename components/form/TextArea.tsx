import { TextAreaProps } from './form';

function TextArea({ placeholder, label, rows }: TextAreaProps) {
  return (
    <div>
      <label className="block font-bold mb-2">{label}</label>
      <textarea
        className="w-full border rounded-lg py-2 px-3 text-black focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}

export default TextArea;
