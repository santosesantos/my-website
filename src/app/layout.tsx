import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';

const roboto_slab = Roboto_Slab({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Santos e Santos',
  description: 'Bruno Santos e Santos é um desenvolvedor front-end altamente versátil que constrói interfaces cativantes e responsivas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto_slab.className}>
        {children}
      </body>
    </html>
  );
}
