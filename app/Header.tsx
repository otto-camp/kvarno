import Image from 'next/image';
import Link from 'next/link';
import avatar from '../public/avatar.jpg';
import logo from '#/public/logo.png';

function Header() {
  return (
    <header className="rounded-lg bg-gray-800 px-4 py-2">
      <div className="flex items-center justify-between">
        <Link href="/" className="rounded-full bg-gray-600 p-1">
          <Image
            src={logo}
            alt="Kvarno"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
        </Link>
        <Link href={`/profile`} className="rounded-full bg-gray-600 p-1">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
