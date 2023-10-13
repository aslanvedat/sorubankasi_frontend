import React, { createContext, useContext, useState } from 'react';

// Context'i oluşturdugumuz yer
const DataContext = createContext(null);

// Context verilerini paylaşacak olan bir Provider bileşeni oluşturduk 
export const DataProvider = ({ children }) => {
  const [score, setScore] = useState(null);

  return (
    <DataContext.Provider value={{ score, setScore }}>
      {children}
    </DataContext.Provider>
  );
};

// Verileri daha kolay erişim için özel bir hook oluşturduk
export const useScore = () => {
  return useContext(DataContext);
};
