import { Dispatch, SetStateAction } from 'react';
function FirstColorPicker({
  firstColor,
  setFirstColor,
}: {
  firstColor: string;
  setFirstColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative mx-2 my-2 w-fit cursor-pointer rounded-lg border border-black bg-white px-2 py-1">
      <label htmlFor="First Color" className="text-black">
        {firstColor}
      </label>
      <input
        type="color"
        value={firstColor}
        onChange={(e) => setFirstColor(e.target.value)}
        id="First Color"
        className="absolute -z-10 opacity-0"
      />
    </div>
  );
}

export default FirstColorPicker;
