import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ receta }) => {
  const { guardarIdReceta } = useContext(ModalContext);

  return (
    <div className="col-md-4 .mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          alt={`imagen de {receta.strDrink} `}
          className="card-img-top"
        />

        <div className="card-body">
          <button
            className="btn btn-block btn-primary rounded"
            onClick={(e) => {
              e.preventDefault();
              guardarIdReceta(receta.idDrink);
            }}
            type="button"
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
