'use client';
import chroma from 'chroma-js';

export default function ColorConversationTable({ color }: { color: string }) {
  return (
    <section className="grid grid-cols-2 rounded-lg border sm:grid-cols-3">
      <div className="sm:col-span-2">
        <p className="my-2 p-2 pl-4 text-2xl font-semibold">HEX</p>
        <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">RGB</p>
        <p className="my-2 p-2 pl-4 text-2xl font-semibold">CMYK</p>
        <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">HSV</p>
        <p className="my-2 p-2 pl-4 text-2xl font-semibold">HSLA</p>
        <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">LAB</p>
        <p className="my-2 p-2 pl-4 text-2xl font-semibold">LCH</p>
      </div>
      <div>
        <p className="my-2 p-2 text-2xl font-semibold ">{color}</p>
        <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold ">
          {chroma(color).rgb().join(',')}
        </p>
        <p className="my-2 p-2 text-2xl font-semibold ">
          {chroma(color)
            .cmyk()
            .map((c, i) =>
              Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
            )
            .join(',')}
        </p>
        <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold ">
          {chroma(color)
            .hsv()
            .map((c, i) =>
              Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
            )
            .join(',')}
        </p>
        <p className="my-2 p-2 text-2xl font-semibold ">
          {chroma(color)
            .hsl()
            .map((c, i) =>
              Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
            )
            .join(',')}
        </p>
        <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold ">
          {chroma(color)
            .lab()
            .map((c) => Math.round(c))
            .join(',')}
        </p>
        <p className="my-2 p-2 text-2xl font-semibold ">
          {chroma(color)
            .lch()
            .map((c) => Math.round(c))
            .join(',')}
        </p>
      </div>
    </section>
  );
}
