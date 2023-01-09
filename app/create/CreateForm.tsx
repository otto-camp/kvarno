'use client';
import FileInput from '#/components/form/FileInput';
import NumberInput from '#/components/form/NumberInput';
import Select from '#/components/form/Select';
import TextArea from '#/components/form/TextArea';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import image from '../../public/image1.jpg';

const options = ['Arial', 'Helvetica', 'Times New Roman', 'Verdana'];

function CreateForm() {
  const [option, setOption] = useState<string>(options[0]);
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Image
          src={image}
          alt="Template 1"
          className="rounded-lg"
          placeholder="blur"
        />
        <Image
          src={image}
          alt="Template 2"
          className="rounded-lg"
          placeholder="blur"
        />
        <Image
          src={image}
          alt="Template 3"
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Customize Your Card</h2>
      <form className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FileInput label="Choose a image" val={file} setVal={setFile} />
          <Select val={option} setVal={setOption} options={options} />
        </div>
        <div className="mb-4">
          <TextArea
            label="Text"
            placeholder="Write something..."
            setVal={setText}
            rows={6}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <NumberInput
            setVal={setWidth}
            defaultValue="500"
            label="Width"
            tooltip={true}
            min="500"
            max="800"
          />
          <NumberInput
            setVal={setHeight}
            defaultValue="350"
            label="Height"
            tooltip={true}
            min="300"
            max="500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Decorations</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image src={image} alt="Decoration 1" className="rounded-lg" />
            <Image src={image} alt="Decoration 2" className="rounded-lg" />
            <Image src={image} alt="Decoration 3" className="rounded-lg" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
