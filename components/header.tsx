import Link from 'next/link';

function Header() {
  return (
    <header>
      <h1>Welcome to ShareCircle!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/donation">
              Donate
            </Link>
          </li>
          <li>
            <Link href="/search">
              Search Organizations
            </Link>
          </li>
          <li>
            <Link href="/resources">
              Resources
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
