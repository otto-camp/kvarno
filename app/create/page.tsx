import CreateForm from './CreateForm';
import image from '../../public/image1.jpg';
import Image from 'next/image';

function page() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Create Your Customizable Card
      </h1>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
        <CreateForm />

        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Image
            src={image}
            alt="Template 1"
            className="rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image}
            alt="Template 2"
            className="rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image}
            alt="Template 3"
            className="rounded-lg"
            placeholder="blur"
          />
        </div> */}
      </div>
    </main>
  );
}

export default page;
