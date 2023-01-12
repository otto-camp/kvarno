'use client';

import { useRef, CSSProperties } from 'react';
import { ConvertToJSS } from '../../utils/ConvertToJSS';

interface CardProps {
  height: string;
  width?: string;
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  title: string;
  titleClasses?: string;
  text?: string;
  textClasses?: string;
  image?: string;
  imageClasses?: string;
  imagePlacement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomRight'
    | 'bottomLeft';
}
function Card({
  height,
  width,
  backgroundColor,
  border,
  borderColor,
  borderRadius,
  shadow,
  title,
  titleClasses,
  text,
  textClasses,
  image,
  imageClasses,
  imagePlacement,
}: CardProps) {
  const card = useRef<HTMLElement | null>(null);

  const bc = ConvertToJSS(borderColor!);
  const b = ConvertToJSS(border!);
  const br = ConvertToJSS(borderRadius!);
  const h = ConvertToJSS(height!);
  const bg = ConvertToJSS(backgroundColor!);

  return (
    <div style={{ ...bc, ...b, ...br, ...h, ...bg }}>
      <div className="flex items-center justify-center h-full">
        <h1 className={titleClasses}>{title}</h1>
      </div>
    </div>
  );
}

export default Card;
