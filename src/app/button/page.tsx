import { Metadata } from 'next';
import ButtonWrapper from './ButtonWrapper';

export const metadata: Metadata = {
  title: 'Button Generator — Kvarno',
  description:
    "Create custom buttons with ease using our online button generator. Our tool lets you design buttons that match your website's style and branding, with options to customize the size, shape, color, font, and more. ",
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: 'https://kvarno.netlify.app/button' },
  keywords: [
    'Button',
    'Generator',
    'Customizable',
    'Design',
    'Create',
    'Web',
    'Online',
    'CSS',
    'HTML',
    'Clickable',
    'Call to action',
    'Marketing',
    'Website',
    'Mobile',
    'Responsive',
    'Round',
    'Circle',
    'Rectangle',
    'Border',
    'Icon',
    'Size',
    'Color',
    'Text',
    'Style',
    'Preview',
    'Code',
    'Copy',
    'Download',
    'Save',
  ],
  openGraph: {
    title: 'Button Generator — Kvarno',
    description:
      'Create custom buttons with ease using our online button generator.',
    url: 'https://kvarno.netlify.app/button',
    siteName: 'Button Generator — Kvarno',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Button Generator — Kvarno',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Button Generator — Kvarno',
    description:
      'Create custom buttons with ease using our online button generator.',
    images: ['/logo.png'],
  },
};

export default function Buttons() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-center text-3xl font-bold md:text-5xl lg:text-7xl">
          Create Your Button <br />
          with{' '}
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:-rotate-6 after:bg-indigo-900 after:content-['']">
            Ease
          </span>
        </h1>
        <p className="max-w-lg text-center text-lg">
          Create custom buttons with ease using our online button generator. Our
          tool lets you design buttons that match your website&apos;s style and
          branding, with options to customize the size, shape, color, font, and
          more.
        </p>
      </section>
      <ButtonWrapper />
    </main>
  );
}
