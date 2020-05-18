import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear context

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [receta, guardarReceta] = useState({});

  //Una vez capturada la receta, llamamos al Api
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idreceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const respuesta = await axios.get(url);
      guardarReceta(respuesta.data.drinks[0]);
    };
    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{
        guardarIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
