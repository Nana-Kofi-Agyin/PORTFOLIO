/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <UIContext.Provider value={{ isModalOpen, openModal, closeModal, currentSection, setCurrentSection }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
