'use client'
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [productData, setProductData] = useState(null);

  const openModal = (product) => {
    setProductData(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProductData(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, productData ,setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
