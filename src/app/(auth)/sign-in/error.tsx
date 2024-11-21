'use client';

// Types
import { PageErrorProps } from '@/types/components';

// Components
import { Container, Button } from '@/components';

const Error = ({
  // error,
  reset,
}: PageErrorProps) => (
  <Container className="flex flex-col items-center">
    <h2 className="font-semibold mb-2">Something went wrong!</h2>
    <Button variant="error" onClick={() => reset()}>
      Try again
    </Button>
  </Container>
);

export default Error;
