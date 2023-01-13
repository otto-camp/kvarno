import Image from 'next/image';
import Link from 'next/link';
import avatar from '../public/avatar.jpg';
import logo from '#/public/logo.png';

function Header() {
  return (
    <header className="max-w-6xl mx-auto bg-gray-800 rounded-full px-4 py-2">
      <div className="flex justify-between items-center">
        <Link href="/" className="p-1 bg-gray-600 rounded-full">
          <Image
            src={logo}
            alt="Kvarno"
            width={48}
            height={48}
            className="object-cover rounded-full"
            priority
          />
        </Link>
        <Link href={`/profile`} className="p-1 bg-gray-600 rounded-full">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="object-cover rounded-full"
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
