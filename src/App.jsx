import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Administrador from "./components/views/Administrador";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Error404></Error404> */}
      {/* <Inicio></Inicio> */}
      {/* <DetalleProducto></DetalleProducto> */}
      {/* <CrearProducto></CrearProducto> */}
      {/* <EditarProducto></EditarProducto> */}
      <Administrador></Administrador>
      <Footer></Footer>
    </>
  );
}

export default App;
