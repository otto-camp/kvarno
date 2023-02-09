import { ConvertToJSS } from '#/src/libs/ConvertToJSS';
import { useCardContext } from '#/src/context/CardContext';
function Text() {
  const {
    text,
    textSize,
    textWeight,
    textColor,
    textAlign,
    textDecoration,
    textDecorationStyle,
    textDecorationColor,
    textDecorationThickness,
    textUnderlineOffset,
  } = useCardContext();

  let tc = `color:${textColor}`;
  let ts = `font-size:${textSize}px`;
  let tw = `font-weight:${textWeight}`;
  let ta = `text-align:${textAlign}`;
  let td = `text-decoration:${textDecoration} ${textDecorationThickness}px ${textDecorationStyle} ${textDecorationColor}`;
  let tuo = `text-underline-offset:${textUnderlineOffset}px`;

  return (
    <h2
      style={Object.assign(
        ConvertToJSS(tc),
        ConvertToJSS(ts),
        ConvertToJSS(tw),
        ConvertToJSS(ta),
        ConvertToJSS(td),
        ConvertToJSS(tuo),
      )}
    >
      {text}
    </h2>
  );
}

export default Text;
