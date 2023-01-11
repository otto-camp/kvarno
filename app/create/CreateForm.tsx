'use client';
import NumberInput from '#/components/form/NumberInput';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import image from '../../public/image1.jpg';
import Card from '../../components/cards/Card';
import TextInput from '#/components/form/TextInput';
import { getConvertedClasses } from '#/utils/GetCSSFromTailwind';
import borderColor from '#/public/borderColor.json';
import border from '#/public/border.json';
import Select from '#/components/form/Select';

const options = ['Arial', 'Helvetica', 'Times New Roman', 'Verdana'];
const bc = [
  borderColor.table[0][2],
  borderColor.table[1][2],
  borderColor.table[2][2],
  borderColor.table[3][2],
];
const b = [
  border.table[0][1],
  border.table[1][1],
  border.table[2][1],
  border.table[3][1],
];

function CreateForm() {
  const [option, setOption] = useState<string>(options[0]);
  const [width, setWidth] = useState<string>('w-full');
  const [height, setHeight] = useState<string>('h-[300px]');
  const [backgroundColor, setBackgroundColor] = useState('bg-violet-400');
  const [border, setBorder] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [borderRadius, setBorderRadius] = useState('');
  const [shadow, setShadow] = useState('');
  const [title, setTitle] = useState('HELLO WORLD');
  const [titleClasses, setTitleClasses] = useState(
    'text-6xl text-center font-black truncate',
  );
  const [text, setText] = useState('');
  return (
    <>
      {/* <TextInput
        label="Title"
        setVal={setTitle}
        defaultValue={title}
        val={title}
      /> */}
      {/* <NumberInput label="Height" setVal={setHeight} defaultValue={height} />
      <NumberInput label="Width" setVal={setWidth} defaultValue={width} /> */}
      {/* <TextInput
        label="Border"
        setVal={setBorder}
        defaultValue={border}
        val={border}
      />
      <TextInput
        label="Border Color"
        setVal={setBorderColor}
        defaultValue={borderColor}
        val={borderColor}
      />
      <TextInput
        label="Border Radius"
        setVal={setBorderRadius}
        defaultValue={borderRadius}
        val={borderRadius}
      /> */}
      <Select
        label="Border Color"
        options={bc}
        val={borderColor}
        setVal={setBorderColor}
      />
      <Select label="Border" options={b} val={border} setVal={setBorder} />

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
    </>
  );
}

export default CreateForm;
