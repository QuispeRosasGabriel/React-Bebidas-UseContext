import React, { createContext, useState } from "react";

//crear el conetext

export const CategoriasContext = createContext();

//crar provider: donde se encuentran  las funciones y el state
const CategoriasProvider = (props) => {
  //state del context

  const [hola, guardarHola] = useState("hola");

  return (
    <CategoriasContext.Provider value={{ hola, guardarHola }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
