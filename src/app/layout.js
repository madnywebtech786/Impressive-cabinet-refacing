import { Geist, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ModalProvider } from './Contexts/ModalContext';
import AppContent from './components/AppContent';
import Head from 'next/head';

const openSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Impressive Cabinet Refacing LTD | Cabinet Refacing & Modifications',
  description:
    'Impressive Cabinet Refacing LTD specializes in cabinet modifications, refinishing & custom designs in Calgary, Airdrie, Cochrane, Okotoks & more. Get a free quote!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <Head>
      <title>Impressive Cabinet Refacing LTD | Cabinet Refacing & Modifications</title>
      <meta name="description" content="Impressive Cabinet Refacing LTD specializes in cabinet modifications, refinishing & custom designs in Calgary, Airdrie, Cochrane, Okotoks & more. Get a free quote!" />
      <meta name="keywords" content="cabinet refacing Calgary, kitchen cabinet refinishing, cabinet modifications, custom cabinet designs, modern kitchen upgrades, cabinet solutions Airdrie, kitchen remodeling Cochrane, storage solutions Chesteremere, countertop installation Strathmore, best cabinet refinishing Highriver, Impressive Cabinet Refacing LTD" />
      <meta property="og:title" content="Impressive Cabinet Refacing LTD | Cabinet Refacing & Modifications" />
      <meta property="og:description" content="Transform your kitchen & bathroom with expert cabinet refinishing & modifications. Serving Calgary, Airdrie, Cochrane, Okotoks & more!" />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Impressive Cabinet Refacing LTD | Cabinet Refacing & Modifications" />
      <meta name="twitter:description" content="Upgrade your kitchen & bathroom with expert cabinet refinishing & modifications in Calgary, Airdrie, Cochrane, Okotoks & more!" />
      <meta name="twitter:image" content="https://yourwebsite.com/your-image.jpg" />
    </Head>
      <body className={`${openSans.variable} antialiased relative bg-white text-black`}>
        <ModalProvider>
          <AppContent>{children}</AppContent>
        </ModalProvider>
      </body>
    </html>
  );
}
