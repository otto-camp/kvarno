import { Metadata } from 'next';
import ColorPicker from './ColorPicker';

export const metadata: Metadata = {
  title: 'Color Picker — Kvarno',
  description:
    'Obtain valuable information about colors including color combinations, libraries for color matching, and conversions between RGB, HSB, HSL and other color models.',
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: 'https://kvarno.netlify.app/color-picker' },
  keywords: [
    'color selection',
    'color scheme',
    'color palette',
    'color wheel',
    'color harmony',
    'color matching',
    'color swatch',
    'color code',
    'color sample',
    'color picker tool',
  ],
  openGraph: {
    title: 'Color Picker — Kvarno',
    description:
      'Obtain valuable information about colors including color combinations.',
    url: 'https://kvarno.netlify.app/color-picker',
    siteName: 'Color Picker — Kvarno',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Color Picker — Kvarno',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Picker — Kvarno',
    description:
      'Obtain valuable information about colors including color combinations.',
    images: ['/logo.png'],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="my-6 md:my-12">
        <h1 className="text-center text-3xl font-bold sm:text-4xl  md:text-5xl">
          Color Picker
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-lg text-gray-300">
          Obtain valuable information about colors including color combinations,
          libraries for color matching, and conversions between RGB, HSB, HSL
          and other color models.
        </p>
      </div>
      <ColorPicker />
    </main>
  );
}
