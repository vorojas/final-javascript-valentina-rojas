let  archivoAlumnos=  [ ] ;
    
    class alumno {
    //propiedades
    constructor ( id , nombrePadre , nombreNinio , telefono ) {
        
        this (nombrePadre)  = nombrePadre ;
        this (nombreNinio)  =  nombreNinio ;
        this (telefono)  =  telefono ;
    }
}

//Funcion que calcula el dia de cumpleaños y cuantos dias le faltan para pasar a la proxima sala
function CumpleañosySala () {
    let hoy = new date();
    document.getElementById("cumple").max = hoy.getFullYear() + "-" +
    (hoy.getMonth () +1) + "-" + (hoy.getDate() < 10 ? ("0" + (hoy.getDate()-1)) : (hoy.getDate()-1));
};
function calculadorDeDias() {
    let hoy = new Date();
    let cumple = new Date(document.getElementById("cumple").value);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    let proximoCumple = new Date(hoy.getFullYear(), cumple.getMonth(), cumple.getDate());
    if (hoy > proximoCumple) {
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    }
        
         let unDia = 24 * 60 * 60 * 1000;
         let faltanTantosDias = Math.ceil((proximoCumple.getTime() - hoy.getTime()) / (unDia));
         if (faltanTantosDias==364){
           document.getElementById("resultado").innerText = "¡Te estas inscribiendo el dia de tu cumpleaños!";
        } else if (faltanTantosDias < 150 && edad < 150){
           document.getElementById("resultado").innerText =`En ${faltanTantosDias} días pasaras a la próxima sala`;
        } else {
           document.getElementById("resultado").innerText = "Ingresa una fecha valida";
        } 
    };


    

//simulamos una base de datos creando un arreglo con un objeto alumno
//entradas.forEach(objeto => { 
    //archivoAlumnos.push(new alumno(objeto.indice,objeto.nombrePadre,objeto.nombreNinio,objeto.telefono));
//});

// Funcion para agregar libreria

let formularioElement = document.getElementById("formulario");
formularioElement.addEventListener('submit', function(e) {
    e.preventDefault();

    let nombrePadre = document.querySelector ('#nombrePadre').value
    let nombreNinio =  document.querySelector ('#nombreNinio').value
    let telefono = document.querySelector ('#telefono').value
    

    if( nombrePadre && nombreNinio && telefono){
        Swal.fire({
            title: 'Los datos son correctos',
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
    })}else {
        Swal.fire('Todos los datos son obligatorios');
        setTimeout() ; {
            agregar();
          } 

        }
    })

    console.log ()


    //funcion para guardar datos precargados en el localstorage
 function guardar_localstorage(){
    let alumno1 = {
        nombrePadre: "Andrés",
        nombreNinio: "Mateo",
        telefonoDeContacto: "351695281",
    }
 
    let alumno2 = {
        nombrePadre: "Romina",
        nombreNinio: "GianFranco",
        telefonoDeContacto: "3515403199",
    }
 
    let alumno3 = {
        nombrePadre: "Cristina",
        nombreNinio: "Catalina",
        telefonoDeContacto: "3513997509",
    }
 
         
 
 
    localStorage.setItem ("nombre", JSON.stringify(alumno1,));
    localStorage.setItem ("nombre", JSON.stringify(alumno2,));
    localStorage.setItem ("nombre", JSON.stringify(alumno3,));
   
}
 
 
guardar_localstorage ()
