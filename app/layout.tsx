import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kunal-portfolio-ahjx.vercel.app'),
  title: {
    default: 'Kunal | Portfolio',
    template: 'Kunal | %s',
  },
  description:
    "Kunal is an avid full stack web developer building websites and applications you'd love to use",
  keywords: [
    'kunal',
    'web developer portfolio',
    'mern stack',
    'kunal portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Kunal's Portfolio",
    description:
      "A full-stack developer building websites that you'd like to use.",
    images: ['/portfolio-preview.png'],
    url: 'https://kunal-portfolio-ahjx.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kunal's Portfolio",
    description:
      "A full-stack developer building websites that you'd like to use.",
    images: ['/portfolio-preview.png'],
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning={true}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
