import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { hola } = useContext(CategoriasContext);
  alert(hola);
  return (
    <form action="" className="col-md-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente..."
          />
        </div>
        <div className="col-md-4">
          <select id="" className="form-control" name="categoria">
            <option value="">--Seleccione categoría--</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
