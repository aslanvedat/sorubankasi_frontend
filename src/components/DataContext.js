import React, { createContext, useContext, useState } from 'react';

// Context'i oluşturuldu
const DataContext = createContext(null);

// Context verilerini paylaşacak olan bir Provider bileşeni oluşturuldu
export const DataProvider = ({ children }) => {
  const [score, setScore] = useState(null);

  return (
    <DataContext.Provider value={{ score, setScore }}>
      {children}
    </DataContext.Provider>
  );
};

// Verileri daha kolay erişim için özel bir hook oluşturuldu
export const useScore = () => {
  return useContext(DataContext);
};
