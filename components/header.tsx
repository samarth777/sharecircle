import Link from 'next/link';

function Header() {
  return (
    <header >
      <h1 >Welcome to ShareCircle!</h1>
      <nav >
            <Link href="/" passHref>
            <button >Home</button>
            </Link>
            <Link href="/donation" passHref>
              <button >Donate</button>
            </Link>

            <Link href="/search" passHref>
            <button >Search Organizations</button>
            </Link>

            <Link href="/resources" passHref>
            <button >Resources</button>
            </Link>

            <Link href="/loginpage" passHref>
            <button >Login</button>
            </Link>

            <Link href="/signup" passHref>
            <button >Sign Up</button>
            </Link>

      </nav>
    </header>
  );
}

export default Header;
