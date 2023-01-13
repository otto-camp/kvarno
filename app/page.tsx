export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-8">
        Create Your Own Card
      </h1>
      <div className="flex justify-center my-6">
        <a
          className="text-violet-50 whitespace-nowrap font-semibold text-3xl py-2 px-4 rounded-lg bg-gray-800 cursor-pointer"
          href="/create"
        >
          Get started
        </a>
      </div>
    </main>
  );
}
