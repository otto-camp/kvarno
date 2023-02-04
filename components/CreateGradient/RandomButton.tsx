import { getRandomHexColor } from '#/libs/GetRandomHexColor';
import { Dispatch, SetStateAction } from 'react';

function RandomButton({
  setFirstColor,
  setSecondColor,
}: {
  setFirstColor: Dispatch<SetStateAction<string>>;
  setSecondColor: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      onClick={() => {
        setFirstColor(getRandomHexColor());
        setSecondColor(getRandomHexColor());
      }}
      className="mx-2 rounded-lg border border-black bg-gray-200 py-2 px-4 font-bold transition-colors hover:bg-gray-300"
    >
      Random
    </button>
  );
}

export default RandomButton;
