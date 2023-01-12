'use client';
import { useState } from 'react';
import Card from '../../components/cards/Card';
import h from '#/public/height.json';
import bgColor from '#/public/bgColor.json';
import bc from '#/public/borderColor.json';
import b from '#/public/border.json';
import br from '#/public/borderRadius.json';
import Select from '#/components/form/Select';

function CreateForm() {
  const [width, setWidth] = useState<string>('w-full');
  const [height, setHeight] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [border, setBorder] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderRadius, setBorderRadius] = useState('');
  const [shadow, setShadow] = useState('');
  const [title, setTitle] = useState('HELLO WORLD');
  const [titleClasses, setTitleClasses] = useState(
    'text-6xl text-center font-black truncate',
  );
  return (
    <>
      <Select
        label="Height"
        options={h.table}
        val={height}
        setVal={setHeight}
      />
      <Select
        label="backgroundColor"
        options={bgColor.table}
        val={backgroundColor}
        setVal={setBackgroundColor}
      />
      <Select
        label="Border Color"
        options={bc.table}
        val={borderColor}
        setVal={setBorderColor}
      />
      <Select
        label="Border"
        options={b.table}
        val={border}
        setVal={setBorder}
      />
      <Select
        label="Border Radius"
        options={br.table}
        val={borderRadius}
        setVal={setBorderRadius}
      />
      <div className=" my-10">
        <Card
          height={height}
          width={width}
          backgroundColor={backgroundColor}
          title={title}
          titleClasses={titleClasses}
          border={border}
          borderColor={borderColor}
          borderRadius={borderRadius}
          shadow={shadow}
        />
      </div>
    </>
  );
}

export default CreateForm;
