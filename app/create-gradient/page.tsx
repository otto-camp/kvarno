import CreateGradient from './CreateGradient';

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
