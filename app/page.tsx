import Banner from './Banner';

import image1 from '../public/image1.jpg';
import image2 from '../public/image2.jpg';
import image3 from '../public/image3.jpg';
import image4 from '../public/image4.jpg';
import image5 from '../public/image5.jpg';
import Image from 'next/image';

const images = [image1, image2, image3, image4, image5];
export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
        {images.map((image, index) => (
          <div key={index} className="col-span-1 m-2">
            <Image
              src={image}
              alt="aa"
              width={image.width}
              className=" rounded-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
