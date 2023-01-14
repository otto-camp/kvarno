'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import Menu from './Menu';

function CreateForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [bgColor, setBgColor] = useState('#000');
  const [border, setBorder] = useState(0);
  const [radius, setRadius] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <Card
            height={height}
            width={width}
            bgColor={bgColor}
            border={border}
            radius={radius}
          />
        </div>
        <div>
          <Menu
            width={width}
            setWidth={setWidth}
            height={height}
            setHeight={setHeight}
            bgColor={bgColor}
            setBgColor={setBgColor}
            border={border}
            setBorder={setBorder}
            radius={radius}
            setRadius={setRadius}
          />
        </div>
      </div>
    </>
  );
}

export default CreateForm;
