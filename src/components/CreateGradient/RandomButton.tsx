import { getRandomHexColor } from '#/src/libs/GetRandomHexColor';
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
      className="btn btn-ghost"
    >
      Random
    </button>
  );
}

export default RandomButton;
