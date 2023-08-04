import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        <StyledComponentsRegistry>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
