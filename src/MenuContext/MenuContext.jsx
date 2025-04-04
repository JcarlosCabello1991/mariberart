import React from 'react';
import { createContext, useContext, useState } from 'react'

// 1. Creamos el contexto
const MenuContext = createContext()

// 2. Creamos el provider
export const MenuProvider = ({ children }) => {
  const [itemSelected, setItemSelected] = React.useState('Destacados');

  return (
    <MenuContext.Provider value={{ itemSelected, setItemSelected }}>
      {children}
    </MenuContext.Provider>
  )
}

// 3. Hook para usar fácilmente el contexto
export const menuMenu = () => useContext(MenuContext)

