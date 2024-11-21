import Link from 'next/link';
import { ReactNode } from 'react';
import { Card, CardBody } from '@nextui-org/react';

// Components
import { Container } from '@/components';

interface SignInLayoutProps {
  children: ReactNode;
}

const SignInLayout = ({ children }: SignInLayoutProps) => (
  <>
    <Container className="min-h-screen p-4 pt-16">
      {/* Logo */}
      <div className="w-full text-center mb-6">
        <Link
          aria-label="Logo"
          className="text-5xl tracking-widest font-quella"
          href="/"
          title="Homepage"
        >
          GREENMIND
        </Link>
      </div>

      <Card className="w-full max-w-md mx-auto">
        <CardBody className="p-7 rounded-2xl bg-background-default">
          {children}
        </CardBody>
      </Card>
    </Container>
  </>
);

export default SignInLayout;
