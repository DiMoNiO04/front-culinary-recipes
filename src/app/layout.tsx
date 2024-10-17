import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Footer, Header } from '@/components/layouts';
import { ScrollBtn } from '@/components/elements';
import '@/styles/index.scss';

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tastebite',
  description: 'Perfect selection of recipes by ingredients | Tastebite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <Header />
        {children}
        <ScrollBtn />
        <Footer />
      </body>
    </html>
  );
}
