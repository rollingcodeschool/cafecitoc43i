const uriUsuario = import.meta.env.VITE_API_USUARIO;
const uriProducto = import.meta.env.VITE_API_PRODUCTO;
// la func recibe de param un usuario con email y password
// export const login = async (usuario) => {
//   try {
//     //pedir la lista de usuarios a json-server
//     const respuesta = await fetch(uriUsuario);
//     const listaUsuarios = await respuesta.json();
//     //buscar si el usuario que completo el formulario esta dentro de la lista de json-server
//     const usuarioBuscado = listaUsuarios.find(
//       (itemUsuario) => itemUsuario.email === usuario.email
//     );
//     //preguntar si encontre el usuario
//     if (usuarioBuscado) {
//       //si encontre el usuario y su password es correcto, esta todo ok
//       if (usuarioBuscado.password === usuario.password) {
//         console.log('todo esta perfecto');
//         return usuarioBuscado;
//       } else {
//         console.log('el password es erroneo');
//         return null;
//       }
//     } else {
//       //caso contrario tendria que decir que salio todo mal
//       console.log('el email es incorrecto');
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const login = async (usuario) =>{
  try {
    console.log(usuario);
    const respuesta = await fetch(uriUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
  //  aqui pueden cambiar la respuesta
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      // token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}


// solicitudes o peticiones a la api
// peticion GET devuelve un listado de elementos o un elemento
// peticion POST, crear un elemento nuevo. (login)
// peticion PUT, modificar todos los valores de un elemento
// peticion PATCH, modificar algun valor de un elemento
// peticion DELETE, eliminar un elemento

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(uriProducto);
    console.log(respuesta);
    const listaProductos = await respuesta.json(); //extraigo los datos del body
    return listaProductos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const crearProducto = async (producto) => {
  try {
    const resp = await fetch(uriProducto, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoEditado),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async(id)=>{
  try{
      const respuesta = await fetch(`${uriProducto}/${id}`,{
          method: "DELETE"
      });
      return respuesta;
  }catch(error){
      console.log(error);
  }
}