'use client';

import Navbar from './Navbar';
import Footer from '../sections/Footer';
import ProductModal from './ProductModal';
import WhatsAppButton from './WhatsAppButton';
import WithLoader from './WithLoader';

const AppContent = WithLoader(({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <ProductModal />
    <WhatsAppButton />
  </>
));

export default AppContent;
