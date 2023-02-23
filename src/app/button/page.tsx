import ButtonWrapper from './ButtonWrapper';
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          voluptate, soluta similique ex,
        </p>
      </section>
      <ButtonWrapper />
    </main>
  );
}
