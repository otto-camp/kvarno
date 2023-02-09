import { ConvertToJSS } from '#/src/libs/ConvertToJSS';
import { useCardContext } from '#/src/context/CardContext';

function Container({ children }: { children: React.ReactNode }) {
  const { width, height, bgColor, border, radius, borderColor } =
    useCardContext();

  let w = width === 0 ? 'width:100%' : `width:${width}px`;
  let h = height === 0 ? 'height:auto' : `height:${height}px`;
  let bg = `background-color:${bgColor}`;
  let b = `border-width:${border}px`;
  let r = `border-radius:${radius}px`;
  let bc = `border-color:${borderColor}`;

  return (
    <div
      style={Object.assign(
        ConvertToJSS(w),
        ConvertToJSS(h),
        ConvertToJSS(bg),
        ConvertToJSS(b),
        ConvertToJSS(r),
        ConvertToJSS(bc),
      )}
      className="m-auto"
    >
      {children}
    </div>
  );
}

export default Container;
