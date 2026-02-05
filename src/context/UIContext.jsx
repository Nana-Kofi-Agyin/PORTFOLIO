/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <UIContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
