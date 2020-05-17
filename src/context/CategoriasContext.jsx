import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear el conetext

export const CategoriasContext = createContext();

//crar provider: donde se encuentran  las funciones y el state
const CategoriasProvider = (props) => {
  //state del context
  const [categorias, guardarCategorias] = useState([]);

  //ejecutar el llamado a la api

  useEffect(() => {
    const obtenerCategorias = async () => {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
