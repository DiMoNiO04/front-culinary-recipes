import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/index.scss';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'PerfectRecipe',
  description: 'Идеальный подбор рецептов по ингредиентам | PerfectRecipe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
