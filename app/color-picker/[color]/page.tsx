import chroma from 'chroma-js';
import invert from 'invert-color';
import Link from 'next/link';

export default function Page({ params }: { params: { color: string } }) {
  const color = params.color;
  const shades = chroma.scale([color, '#000000']).mode('lab').colors(10);
  const tints = chroma.scale([color, '#FFFFFF']).mode('lab').colors(10);
  return (
    <main className="mt-12">
      <Link
        href="/color-picker"
        className="rounded-lg bg-blue-200 px-2 py-1 text-blue-900 underline"
      >
        Go Back
      </Link>
      <div
        className="mb-12 mt-4 flex h-[100px] items-center justify-center rounded-lg"
        style={{ backgroundColor: `#${color}` }}
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{color}</h1>
      </div>
      <section className="grid grid-cols-2 rounded-lg border sm:grid-cols-3">
        <div className="sm:col-span-2">
          <p className="my-2 p-2 pl-4 text-2xl font-semibold">HEX</p>
          <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">
            RGB
          </p>
          <p className="my-2 p-2 pl-4 text-2xl font-semibold">CMYK</p>
          <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">
            HSV
          </p>
          <p className="my-2 p-2 pl-4 text-2xl font-semibold">HSLA</p>
          <p className="my-2 bg-zinc-800 p-2 pl-4 text-2xl font-semibold">
            LAB
          </p>
          <p className="my-2 p-2 pl-4 text-2xl font-semibold">LCH</p>
        </div>
        <div>
          <p className="my-2 p-2 text-2xl font-semibold">{color}</p>
          <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold">
            {chroma(color).rgb().join(',')}
          </p>
          <p className="my-2 p-2 text-2xl font-semibold">
            {chroma(color)
              .cmyk()
              .map((c, i) =>
                Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
              )
              .join(',')}
          </p>
          <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold">
            {chroma(color)
              .hsv()
              .map((c, i) =>
                Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
              )
              .join(',')}
          </p>
          <p className="my-2 p-2 text-2xl font-semibold">
            {chroma(color)
              .hsl()
              .map((c, i) =>
                Number.isInteger(c) ? c : i !== 0 && Math.round(c * 100),
              )
              .join(',')}
          </p>
          <p className="my-2 bg-zinc-800 p-2 text-2xl font-semibold">
            {chroma(color)
              .lab()
              .map((c) => Math.round(c))
              .join(',')}
          </p>
          <p className="my-2 p-2 text-2xl font-semibold">
            {chroma(color)
              .lch()
              .map((c) => Math.round(c))
              .join(',')}
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-4">
        <div>
          <h2 className="border-b border-white/25 text-2xl">Shades</h2>
          <p>
            A shade is created by adding black to a base color, increasing its
            darkness.
          </p>
          <div className="flex flex-col rounded-lg lg:flex-row">
            {shades.map((s) => (
              <div
                className="w-full p-2 text-lg font-medium first-of-type:rounded-tl-lg first-of-type:rounded-tr-lg last-of-type:rounded-bl-lg last-of-type:rounded-br-lg lg:first-of-type:rounded-l-lg lg:first-of-type:rounded-tr-none lg:last-of-type:rounded-r-lg lg:last-of-type:rounded-bl-none"
                key={s}
                style={{ backgroundColor: s, color: invert(s, true) }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="border-b border-white/25 text-2xl">Tints</h2>
          <p>
            A tint is created by adding white to a base color, increasing its
            lightness. Tints are likely to look pastel and less intense.
          </p>
          <div className="flex flex-col rounded-lg lg:flex-row">
            {tints.map((t) => (
              <div
                className="w-full p-2 text-lg font-medium first-of-type:rounded-tl-lg first-of-type:rounded-tr-lg last-of-type:rounded-bl-lg last-of-type:rounded-br-lg lg:first-of-type:rounded-l-lg lg:first-of-type:rounded-tr-none lg:last-of-type:rounded-r-lg lg:last-of-type:rounded-bl-none"
                key={t}
                style={{ backgroundColor: t, color: invert(t, true) }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
