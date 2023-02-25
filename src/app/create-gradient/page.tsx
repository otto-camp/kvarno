import { Metadata } from 'next';
import CreateGradient from './CreateGradient';

export const metadata: Metadata = {
  title: 'Generate 4K Gradient — Kvarno',
  description:
    "Kvarno's Gradient Background Generator - Generate stunning gradient backgrounds with maximum compatibility CSS and 4k downloadable versions for your website. Upgrade your website's design with ease.",
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: 'https://kvarno.netlify.app/create-gradient' },
  keywords: [
    ' gradient creation',
    'gradient maker',
    'gradient design',
    'gradient editor',
    'gradient tool',
    'color gradient',
    'smooth gradient',
    'gradient palette',
    'gradient generator',
    'gradient preview',
    'gradient CSS',
    'gradient background',
    'gradient transition',
  ],
  openGraph: {
    title: 'Generate 4K Gradient — Kvarno',
    description:
      'Generate stunning gradient backgrounds with maximum compatibility CSS and 4k downloadable versions for your website.',
    url: 'https://kvarno.netlify.app/create-gradient',
    siteName: 'Generate 4K Gradient — Kvarno',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Generate 4K Gradient — Kvarno',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generate 4K Gradient — Kvarno',
    description:
      'Generate stunning gradient backgrounds with maximum compatibility CSS and 4k downloadable versions for your website.',
    images: ['/logo.png'],
  },
};

function Page() {
  return (
    <main className="my-6">
      <div className="my-6 md:my-12">
        <h1 className="text-center text-3xl font-bold sm:text-4xl  md:text-5xl">
          Create Gradient
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-lg text-gray-300">
          Generate stunning gradient backgrounds with maximum compatibility CSS
          and 4k downloadable versions for your website. Upgrade your
          website&apos;s design with ease.
        </p>
      </div>
      <CreateGradient />
    </main>
  );
}

export default Page;
