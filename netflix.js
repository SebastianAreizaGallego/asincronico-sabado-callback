//datos del usuario
let datosUsuario={
    usuario:"sebastian@gmail.com",
    password:"adm12345*"
}



//funcion principal
//tambien llamo funcion secundaria o callback
let conectarConNetflix=(datos,generarRespuestaCallback)=>{

console.log("procesando la peticion...");    
setTimeout(function(){

    if(datos.usuario==="sebastian@gmail.com" && datos.password==="adm12345*"){

        generarRespuestaCallback(200)

    }else{

        generarRespuestaCallback(204)

    }

},5000)

    

}

//utilizo o llamo funcion principal
//declaro lo que hace el callback

conectarConNetflix(datosUsuario,function(codigo){

    if(codigo==200){

        console.log("Bienvenido a netflix");
        console.log("Cargando Peliculas.....");

    }else{

        console.log("No estas registrado, subscribete...");
    }

});







