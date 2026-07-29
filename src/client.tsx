import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { createRouter } from './router';

const router = createRouter();

// Cloudflare Web Analytics and browser extensions may inject elements before this
// script runs. Rendering avoids document-level hydration failures in that case.
createRoot(document as unknown as Element).render(<RouterProvider router={router} />);
