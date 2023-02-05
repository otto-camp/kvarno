'use client';
import invert from 'invert-color';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function ColorTints({ tints }: { tints: string[] }) {
  const [copy, setCopy] = useState({ status: false, index: 0 });
  return (
    <div className="flex flex-col rounded-lg lg:flex-row">
      {tints.map((tint, index) => (
        <CopyToClipboard key={tint} text={tint}>
          <div
            className="w-full cursor-pointer p-2 text-lg font-medium first-of-type:rounded-tl-lg first-of-type:rounded-tr-lg last-of-type:rounded-bl-lg last-of-type:rounded-br-lg lg:first-of-type:rounded-l-lg lg:first-of-type:rounded-tr-none lg:last-of-type:rounded-r-lg lg:last-of-type:rounded-bl-none"
            style={{ backgroundColor: tint, color: invert(tint, true) }}
            onClick={() => {
              setCopy({ status: true, index: index });
              setTimeout(() => {
                setCopy({ status: false, index: index });
              }, 1000);
            }}
          >
            {index === copy.index && copy.status ? 'copied' : tint}
          </div>
        </CopyToClipboard>
      ))}
    </div>
  );
}
