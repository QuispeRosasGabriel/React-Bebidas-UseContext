import React, { useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { ModalContext } from "../context/ModalContext";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  //configuracion del estilo
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  const { informacion, guardarIdReceta, guardarReceta } = useContext(
    ModalContext
  );

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
              handleOpen();
            }}
            type="button"
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{informacion.strInstructions}</p>
              <img
                src={informacion.strDrinkThumb}
                alt=""
                className="img-fluid"
              />
              <h3>Ingredientes y cantidades</h3>
              <ul>{mostrarIngredientes(informacion)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
