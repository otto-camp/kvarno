'use client';
import { CardContext } from '#/src/context/CardContext';
import { useState } from 'react';
import Card from '../../components/CreateCard/Card';
import Menu from './Menu';

function CreateCard() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [bgColor, setBgColor] = useState('#000000');
  const [border, setBorder] = useState(0);
  const [radius, setRadius] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');
  const [text, setText] = useState('Hello');
  const [textSize, setTextSize] = useState(24);
  const [textWeight, setTextWeight] = useState('400');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [textAlign, setTextAlign] = useState('start');
  const [textDecoration, setTextDecoration] = useState('none');
  const [textDecorationStyle, setTextDecorationStyle] = useState('solid');
  const [textDecorationColor, setTextDecorationColor] = useState('#FFFFFF');
  const [textDecorationThickness, setTextDecorationThickness] = useState(0);
  const [textUnderlineOffset, setTextUnderlineOffset] = useState(0);

  return (
    <CardContext.Provider
      value={{
        width,
        setWidth,
        height,
        setHeight,
        bgColor,
        setBgColor,
        border,
        setBorder,
        radius,
        setRadius,
        borderColor,
        setBorderColor,
        text,
        setText,
        textSize,
        setTextSize,
        textWeight,
        setTextWeight,
        textColor,
        setTextColor,
        textAlign,
        setTextAlign,
        textDecoration,
        setTextDecoration,
        textDecorationStyle,
        setTextDecorationStyle,
        textDecorationColor,
        setTextDecorationColor,
        textDecorationThickness,
        setTextDecorationThickness,
        textUnderlineOffset,
        setTextUnderlineOffset,
      }}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </CardContext.Provider>
  );
}

export default CreateCard;
