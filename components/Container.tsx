import { ConvertToJSS } from '#/utils/ConvertToJSS';

function Container({
  width,
  height,
  bgColor,
  children,
  border,
  radius,
}: {
  width: number;
  height: number;
  bgColor: string;
  border: number;
  radius: number;
  children: React.ReactNode;
}) {
  let w = width === 0 ? 'width:100%' : `width:${width}px`;
  let h = height === 0 ? 'height:auto' : `height:${height}px`;
  let bg = `background-color:${bgColor}`;
  let b = `border-width:${border}px`;
  let r = `border-radius:${radius}px`;

  return (
    <div
      style={Object.assign(
        ConvertToJSS(w),
        ConvertToJSS(h),
        ConvertToJSS(bg),
        ConvertToJSS(b),
        ConvertToJSS(r),
      )}
    >
      {children}
    </div>
  );
}

export default Container;
