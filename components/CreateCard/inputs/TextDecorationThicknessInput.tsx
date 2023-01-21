import { Dispatch, SetStateAction } from 'react';
function TextDecorationThicknessInput({
  textDecorationThickness,
  setTextDecorationThickness,
}: {
  textDecorationThickness: number;
  setTextDecorationThickness: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mx-2 mb-2 rounded-lg py-1">
      <label
        htmlFor="Text Decoration Thickness"
        className="mb-2 block font-medium"
      >
        Text Decoration Thickness
      </label>

      <input
        id="Text Decoration Thickness"
        type="number"
        defaultValue={textDecorationThickness}
        onChange={(e) => setTextDecorationThickness(Number(e.target.value))}
        className="w-full rounded-lg border border-black px-2 py-1 text-black"
      />
    </div>
  );
}

export default TextDecorationThicknessInput;
