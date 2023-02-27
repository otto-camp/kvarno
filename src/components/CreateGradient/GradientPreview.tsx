import { useGradientContext } from '#/src/context/GradientContext';
import { ConvertToJSS } from '#/src/libs/ConvertToJSS';
function GradientPreview() {
  const {
    firstColor,
    secondColor,
    firstColorPosition,
    secondColorPosition,
    degree,
  } = useGradientContext();

  let bg = `background: ${`linear-gradient(${degree}deg,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%)`}`;

  return (
    <div
      style={ConvertToJSS(bg)}
      className="h-full rounded-lg border border-black/50"
    />
  );
}

export default GradientPreview;
