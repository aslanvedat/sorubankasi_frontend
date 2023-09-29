// DataContext.js
import React, { createContext, useContext, useState } from 'react';

// Context'i oluşturun
const DataContext = createContext(null);

// Context verilerini paylaşacak olan bir Provider bileşeni oluşturun
export const DataProvider = ({ children }) => {
  const [score, setScore] = useState(null);

  return (
    <DataContext.Provider value={{ score, setScore }}>
      {children}
    </DataContext.Provider>
  );
};

// Verileri daha kolay erişim için özel bir hook oluşturun
export const useScore = () => {
  return useContext(DataContext);
};
