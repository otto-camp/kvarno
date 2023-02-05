import chroma from 'chroma-js';
import invert from 'invert-color';
import Link from 'next/link';
import ColorConversationTable from './ColorConversationTable';
import ColorShades from './ColorShades';
import ColorTints from './ColorTints';

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
        style={{ backgroundColor: `#${color}`, color: invert(color, true) }}
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{color}</h1>
      </div>
      <ColorConversationTable color={color} />
      <section className="mt-12 grid gap-4">
        <div>
          <h2 className="border-b border-white/25 text-2xl">Shades</h2>
          <p className="mb-2">
            A shade is created by adding black to a base color, increasing its
            darkness.
          </p>
          <ColorShades shades={shades} />
        </div>
        <div>
          <h2 className="border-b border-white/25 text-2xl">Tints</h2>
          <p className="mb-2">
            A tint is created by adding white to a base color, increasing its
            lightness. Tints are likely to look pastel and less intense.
          </p>
          <ColorTints tints={tints} />
        </div>
      </section>
    </main>
  );
}
