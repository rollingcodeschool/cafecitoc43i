const uriUsuario = import.meta.env.VITE_API_USUARIO; 
// la func recibe de param un usuario con email y password
export const login = async (usuario)=>{
    try{
        //pedir la lista de usuarios a json-server
        const respuesta = await fetch(uriUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar si el usuario que completo el formulario esta dentro de la lista de json-server
        const usuarioBuscado= listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email );
        //preguntar si encontre el usuario
        if(usuarioBuscado){
            //si encontre el usuario y su password es correcto, esta todo ok 
            if(usuarioBuscado.password === usuario.password){
                console.log('todo esta perfecto');
                return usuarioBuscado;
            }else{
                console.log('el password es erroneo')
                return null;
            }
        }else{
            //caso contrario tendria que decir que salio todo mal 
            console.log('el email es incorrecto');
            return null;
        }
    }catch(error){
        console.log(error)
    }
}