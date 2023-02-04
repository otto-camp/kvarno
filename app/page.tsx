export default function Page() {
  return (
    <main className="relative px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
        Discover the ultimate CSS and HTML tools
      </h1>
      <section className="mx-auto mt-6 flex flex-col justify-center gap-6 md:mt-12">
        <div className="flex flex-col items-start gap-4 text-3xl font-semibold text-white">
          <h2 className="">Create Gradient</h2>
          <p className="text-lg font-normal">
            Generate stunning gradient backgrounds with maximum compatibility
            CSS and 4k downloadable versions for your website. Upgrade your
            website&apos;s design with ease.
          </p>
          <a
            href="/create-gradient"
            className="rounded-lg bg-gray-800 p-2 pr-8 text-lg transition-all duration-200 hover:bg-gray-600"
          >
            Go -&gt;
          </a>
        </div>

        <div className="flex flex-col items-start gap-4 text-3xl font-semibold text-white">
          <h2 className="">Color Mixer</h2>
          <p className="text-lg font-normal">
            Explore the world of color with our online color mixer. Mix and
            match different shades, tints, and hues to create the perfect color
            palette for your project. Easy conversion between color models
            available.
          </p>
          <a
            href="/color-mixer"
            className="rounded-lg bg-gray-800 p-2 pr-8 text-lg transition-all duration-200 hover:bg-gray-600"
          >
            Go -&gt;
          </a>
        </div>

        <div className="flex flex-col items-start gap-4 text-3xl font-semibold text-white">
          <h2 className="">Color Picker</h2>
          <p className="text-lg font-normal">
            Obtain valuable information about colors including color
            combinations, libraries for color matching, and conversions between
            RGB, HSB, HSL and other color models.
          </p>
          <a
            href="/color-picker"
            className="rounded-lg bg-gray-800 p-2 pr-8 text-lg transition-all duration-200 hover:bg-gray-600"
          >
            Go -&gt;
          </a>
        </div>
      </section>
    </main>
  );
}
