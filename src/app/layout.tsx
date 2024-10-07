import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
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
  description: 'Идеальный подбор рецептов по ингредиентам | Tastebite',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
