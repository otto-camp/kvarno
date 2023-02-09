import ColorMixer from './ColorMixer';

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
