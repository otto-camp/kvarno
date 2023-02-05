import ColorPicker from './ColorPicker';
export default function Page() {
  return (
    <main>
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
