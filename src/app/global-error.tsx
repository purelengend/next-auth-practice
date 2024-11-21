'use client';

// Types
import { PageErrorProps } from '@/types/components';

// Layouts
import { Header } from '@/layouts';

// Components
import { Button } from '@/components';

export default function GlobalError({
  // error,
  reset,
}: PageErrorProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <h2>Something went wrong!</h2>
        <Button variant="error" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
