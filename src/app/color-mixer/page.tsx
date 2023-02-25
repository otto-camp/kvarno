import ColorMixer from './ColorMixer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Mixer — Kvarno',
  description:
    'Explore the world of color with our online color mixer. Mix and match different shades, tints, and hues to create the perfect color palette for your project. Easy conversion between color models available.',
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: 'https://kvarno.netlify.app/color-mixer' },
  keywords: [
    'color mixing',
    'color creation',
    'color generation',
    'color blending',
    'color manipulation',
    'color adjustment',
    'color picker',
    'color wheel',
    'color palette',
    'color scheme',
    'color combination',
    'color formula',
    'color conversion',
    'color representation',
    'color model',
    'color values',
  ],
  openGraph: {
    title: 'Color Mixer — Kvarno',
    description: 'Explore the world of color with our online color mixer.',
    url: 'https://kvarno.netlify.app/color-mixer',
    siteName: 'Color Mixer — Kvarno',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Color Mixer — Kvarno',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Mixer — Kvarno',
    description: 'Explore the world of color with our online color mixer.',
    images: ['/logo.png'],
  },
};

function Page() {
  return (
    <main className="my-6">
      <div className="my-6 md:my-12">
        <h1 className="text-center text-3xl font-bold sm:text-4xl  md:text-5xl">
          Color Mixer
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-lg text-gray-300">
          Explore the world of color with our online color mixer. Mix and match
          different shades, tints, and hues to create the perfect color palette
          for your project. Easy conversion between color models available.
        </p>
      </div>
      <ColorMixer />
    </main>
  );
}

export default Page;
