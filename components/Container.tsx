import { ConvertToJSS } from '#/utils/ConvertToJSS';

function Container({
  width,
  height,
  bgColor,
  children,
}: {
  width: number;
  height: number;
  bgColor: string;
  children: React.ReactNode;
}) {
  let w = width === 0 ? 'width:100%' : `width:${width}px`;
  let h = height === 0 ? 'height:auto' : `height:${height}px`;
  let bg = `background-color:${bgColor}`;

  return (
    <div
      style={Object.assign(ConvertToJSS(w), ConvertToJSS(h), ConvertToJSS(bg))}
    >
      {children}
    </div>
  );
}

export default Container;
