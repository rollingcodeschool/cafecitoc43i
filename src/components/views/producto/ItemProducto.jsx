import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { borrarProductoAPI, listarProductos } from '../../helpers/queries';


const ItemProducto = ({ nombreProducto, precio, categoria, imagen, _id ,setProductos}) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el producto",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //realizar la consulta a la api
        borrarProductoAPI(_id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actualizar el state productos o la tabla
            listarProductos().then((respuesta)=>{
              console.log(respuesta)
              setProductos(respuesta)
            })

            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente borrado",
              "success"
            );
          }else{
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operacion mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{nombreProducto}</td>
      <td>{precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link to={`/administrador/editar/${_id}`} className='btn btn-warning me-2'>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
