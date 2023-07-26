import { Button } from "react-bootstrap";


const ItemProducto = () => {
   return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>1</td>
      <td>MOCHACCINO CANELA</td>
      <td>$1.740,00</td>
      <td>https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
      <td>Café</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
