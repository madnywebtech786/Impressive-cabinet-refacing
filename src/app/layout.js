import { Geist, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './Contexts/ModalContext';
import AppContent from './components/AppContent';

const openSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Impressive Cabinet Refacing LTD',
  description:
    'Transform your kitchen and bathroom with expert cabinet modifications, modern door upgrades, professional refinishing, and custom designs. We specialize in tailored solutions like roll-out trays, elegant countertops, and innovative storage. Enhance your home with premium craftsmanship, durable finishes, and stylish renovations that combine functionality and aesthetics. Explore our services today for a seamless, hassle-free upgrade!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${openSans.variable} antialiased relative bg-white text-black`}>
        <ModalProvider>
          <AppContent>{children}</AppContent>
        </ModalProvider>
      </body>
    </html>
  );
}
