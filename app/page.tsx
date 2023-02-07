export default function Page() {
  return (
    <main className="relative px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl">
        Discover the ultimate CSS and HTML tools
      </h1>
      <section className="relative mx-auto mt-6 flex flex-col justify-center gap-6 md:mt-12">
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
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </main>
  );
}
