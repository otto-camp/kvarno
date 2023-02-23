import Image from 'next/image';
import Link from 'next/link';
import logo from '#/public/logo.png';
import Arrow from '../assets/svg/Arrow';

const components = [{ name: 'Button', href: 'button' }];

function Header() {
  return (
    <header className="relative ">
      <div className="fixed top-5 left-0 right-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-base-300 px-4 py-2 shadow-md shadow-base-300 backdrop-blur-xl">
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
        <nav className="flex items-center justify-center">
          <div className="dropdown-end dropdown-hover dropdown">
            <label
              tabIndex={0}
              className="btn-ghost btn m-1 rounded-lg text-md md:text-xl normal-case"
            >
              Components
              <Arrow direction='down'/>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact w-full bg-base-100 p-2 shadow"
            >
              {components.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="btn-ghost btn rounded-lg text-sm md:text-lg normal-case"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/"></Link>
          <Link href="/"></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
