import { useGradientContext } from '../../context/GradientContext';
import { ConvertToJSS } from '#/libs/ConvertToJSS';
function GradientPreview() {
  const {
    firstColor,
    secondColor,
    firstColorPosition,
    secondColorPosition,
    degree,
    type,
  } = useGradientContext();

  let bg = `background: ${
    type === 'linear'
      ? `linear-gradient(${degree}deg,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%)`
      : `radial-gradient(circle,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%)`
  }`;

  return <div style={ConvertToJSS(bg)} className="min-h-[400px] rounded-lg" />;
}

export default GradientPreview;
