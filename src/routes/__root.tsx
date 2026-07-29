import { useState, useEffect } from 'react';
import { createRootRoute, Outlet, ScrollRestoration, HeadContent, Scripts } from '@tanstack/react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuickSearchModal } from '../components/QuickSearchModal';
import { BackToTop } from '../components/BackToTop';
import appCss from '../styles/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'ToolHub — Directory of Premium Web Tools & Calculators' },
      { name: 'description', content: 'A curated directory of 87+ high-performance web tools, AI name generators, precision calculators, and developer formatters.' },
      
      // OpenGraph
      { property: 'og:title', content: 'ToolHub — Directory of Premium Web Tools & Calculators' },
      { property: 'og:description', content: 'A curated directory of 87+ high-performance web tools, AI name generators, precision calculators, and developer formatters.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tool-hub.loveyouall.qzz.io/' },
      { property: 'og:site_name', content: 'ToolHub' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ToolHub — Directory of Premium Web Tools & Calculators' },
      { name: 'twitter:description', content: 'A curated directory of 87+ high-performance web tools, AI name generators, precision calculators, and developer formatters.' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://api.fontshare.com' },
      { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&f[]=satoshi@900,700,500,300,400&display=swap' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ToolHub",
            "url": "https://tool-hub.loveyouall.qzz.io/",
            "description": "A curated directory of 87+ high-performance web tools, AI name generators, precision calculators, and developer formatters.",
            "publisher": {
              "@type": "Organization",
              "name": "ToolHub"
            }
          })
        }} />
      </head>
      <body>
        <Header onOpenSearch={() => setIsSearchOpen(true)} />
        <main
          style={{
            flex: 1,
            maxWidth: '72rem',
            width: '100%',
            margin: '0 auto',
            padding: '3rem 1.5rem 6rem 1.5rem',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Outlet />
        </main>
        <Footer />

        <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <BackToTop />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
