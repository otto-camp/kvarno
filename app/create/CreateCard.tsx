'use client';
import { CardContext } from '#/context/CardContext';
import { useState } from 'react';
import Card from '../../components/Card';
import Menu from './Menu';

function CreateCard() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [bgColor, setBgColor] = useState('#000000');
  const [border, setBorder] = useState(0);
  const [radius, setRadius] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');

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
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
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
