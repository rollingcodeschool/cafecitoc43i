import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";


const RutasProtegidas = () => {
  return (
    // dominio/administrador/*
    <Routes>
      <Route
        exact
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        exact
        path="/crear"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/editar"
        element={<EditarProducto></EditarProducto>}
      ></Route>
    </Routes>
  );
};

export default RutasProtegidas;
