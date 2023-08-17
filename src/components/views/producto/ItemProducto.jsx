import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemProducto = ({ nombreProducto, precio, categoria, imagen, id }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nombreProducto}</td>
      <td>{precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link to={`/administrador/editar/${id}`} className='btn btn-warning'>
          Editar
        </Link>
        <Button variant='danger'>Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
