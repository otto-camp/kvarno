export default function Page() {
  return (
    <main className="relative px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
        Create Your Own Card
      </h1>
      <div className="my-6 mx-auto flex flex-col justify-center gap-6 md:w-1/3">
        <a
          className="cursor-pointer whitespace-nowrap rounded-lg bg-gray-800 py-2 px-4 text-3xl font-semibold text-violet-50"
          href="/create-card"
        >
          Create Card
        </a>
        <a
          className="cursor-pointer whitespace-nowrap rounded-lg bg-gray-800 py-2 px-4 text-3xl font-semibold text-violet-50"
          href="/create-gradient"
        >
          Create Gradient
        </a>
        <a
          className="cursor-pointer whitespace-nowrap rounded-lg bg-gray-800 py-2 px-4 text-3xl font-semibold text-violet-50"
          href="/color-mixer"
        >
          Color Mixer
        </a>
      </div>
    </main>
  );
}
