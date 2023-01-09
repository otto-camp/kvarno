import Image from 'next/image';
import Link from 'next/link';
import avatar from '../public/avatar.jpg';

function Header() {
  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex justify-between">
        <Link href="/" className="text-4xl font-bold ">
          Logo
        </Link>
        <Link href={`/profile`} className="p-1 bg-gray-800 rounded-full">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="object-cover rounded-full"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
