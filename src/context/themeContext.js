import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const MyContext = createContext();

// Crea el proveedor
export function MyContextProvider({ children }) {
    const [score, setScore] = useState(-1);
    const [currentUser, setCurrentUser] = useState({})

  const contextValue = { score, setScore, currentUser, setCurrentUser };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

// Hook personalizado para acceder al contexto
export function useMyContext() {
  return useContext(MyContext);
}