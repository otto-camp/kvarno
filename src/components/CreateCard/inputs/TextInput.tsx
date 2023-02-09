import { Dispatch, SetStateAction } from 'react';

function TextInput({
  text,
  setText,
}: {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="mx-2 mt-6 mb-2 rounded-lg py-1">
      <label className="mb-2 block font-medium" htmlFor="Text">
        Text
      </label>
      <input
        id="Text"
        type="text"
        className="block w-full rounded-lg border border-black px-2 py-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
