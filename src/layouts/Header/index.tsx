import Link from 'next/link';

// UI Components
import { Navbar } from '@/ui';

// Components
import { Container } from '@/components';

const Header = () => (
  <header className="sticky z-10 top-0 h-12 py-10 bg-background-default border-b">
    <Container
      as="nav"
      className="h-full px-4 flex justify-between items-center"
    >
      <div>
        <Link
          className="text-xl sm:text-3xl tracking-widest font-quella"
          href="/"
          title="Homepage"
        >
          GREENMIND
        </Link>
      </div>

      <Navbar />
    </Container>
  </header>
);

export default Header;
