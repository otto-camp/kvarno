'use client';

import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-6xl">Something went wrong!</h2>
      <h3 className="my-6 text-4xl uppercase underline">{error.message}</h3>
      <Link
        href="/"
        className="mt-12 rounded-lg bg-gray-800 px-4 py-2 text-2xl"
      >
        Return Home
      </Link>
    </div>
  );
}
