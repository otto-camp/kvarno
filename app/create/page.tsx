import CreateForm from './CreateForm';

function page() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Create Your Customizable Card
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-8">
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
          <CreateForm />
        </div>
      </div>
    </main>
  );
}

export default page;
