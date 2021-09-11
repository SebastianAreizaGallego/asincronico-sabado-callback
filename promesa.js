let datosUsuario={
    usuario:"sebastian@gmail.com",
    password:"adm12345**"
}

let conectarConNetflix=(datos)=>{

    console.log("procesando la peticion...");   
    
    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
    
            if(datos.usuario==="sebastian@gmail.com" && datos.password==="adm12345*"){
        
               resolve(200,"Bienvenido a netflix")
        
            }else{
        
                reject(204,"no estas registrado")
        
            }
        
        },5000)

  })
    return promesa;


   
    
        
    
    }

    conectarConNetflix(datosUsuario)
    .then(function(respuesta){

        console.log(respuesta)

    })
     .catch(function(respuesta){
   
        console.log(respuesta)

     })