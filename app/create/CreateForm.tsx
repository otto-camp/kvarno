'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import Menu from './Menu';

function CreateForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [bgColor, setBgColor] = useState('#000');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-3">
        <Card height={height} width={width} bgColor={bgColor} />
      </div>
      <div>
        <Menu
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          bgColor={bgColor}
          setBgColor={setBgColor}
        />
      </div>
    </div>
  );
}

export default CreateForm;
