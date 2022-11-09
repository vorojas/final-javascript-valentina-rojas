//const solicitarDatos = () => {
    //let masestudiantes = 1;
    //while (masestudiantes !=0) { // condicion que se cumple hasta que el numero ingresado sea cero
        //let name = prompt('Cual es el nombre del niño/a?');
        //let sala = prompt('Edad del niño');
        //let telefono= prompt('Ingrese telefono de contacto');
        //let horas = prompt('Cuantas horas asistirá el niño al jardín? o ingresa 0 para salir');
        //masestudiantes = prompt('Vas a ingresar mas estudiantes? 0 para NO');
        //if (isNaN(horas)) {
          //  alert("El valor ingresado no es un numero")
          //  horas = 0;
        //} else {
         //   const alumno = new solicitudEstudiante(name, sala, telefono, horas);
         //   console.log(alumno);
          //  console.log(alumno.imprimir());
       // };
    //};


//solicitarDatos();




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
           document.getElementById("resultado").innerText = "En ${faltanTantosDias} días pasaras a la proxima sala";
        } else {
           document.getElementById("resultado").innerText = "Ingresa una fecha valida";
        } 
    };



    let leerInput = ( event )=>{
        console.log (event.target.value)
    }




let formularioElement = document.getElementById("formulario");
formularioElement.addEventListener('submit', function(e) {
    e.preventDefault();

    let nombrePadre = document.querySelector ('#nombrePadre').value
    let nombreNinio =  document.querySelector ('#nombreNinio').value
    let telefono = document.querySelector ('#telefono').value
    let archivoAlumnos = [];

    if( nombrePadre && nombreNinio && telefono){
        Swal.fire({
            title: 'Los datos son correctos',
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
    })
    if(nombrePadre != "" && nombreNinio != "" && telefono != ""){
        let alumno = new alumno(generarID(),nombrePadre,nombreNinio,telefono);
        archivoAlumnos.push(alumno);
        localStorage.archivoAlumnos = JSON.stringify(archivoAlumnos); //guarda en local storage
        representaArreglo(archivoAlumnos);
    } else {
        Swal.fire('Todos los datos son obligatorios');
        setTimeout() ; {
            agregar();
          }
    }

    const mostrarEnLista = (nombrePadre, nombreNinio, telefono) =>{ 
        let Turno = "";
    
        Turnos ? Turno = "Maniana" : Turno = "Tarde";
    
        document.getElementById('Tabla1').insertRow(-1).innerHTML = `<tr>
            <td>${nombrePadre}</td><td>${nombreNinio}</td><td>${telefono}</td>
            <td>${Turno}</td><tr>`
            
    };

    mostrarEnLista ();

    let formularioData = new FormData(formularioElement);
    for(let pair of formularioData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
     }
    });

    function guardar_localstorage(){
        let alumno1 = {
            nombrePadre: "Andrés",
            nombreNinio: "Mateo",
            telefonoDeContacto: "351695281",
        }

        let alumno2 = {
            nombrePadre: "Romina",
            nombreNinio: "Gianluca",
            telefonoDeContacto: "3515403199",
        }

        let alumno3 = {
            nombrePadre: "Cristina",
            nombreNinio: "Catalina",
            telefonoDeContacto: "3513997509",
        }

        let alumno4 = {
             

        }

        localStorage.setItem ("nombre", JSON.stringify(alumno1, alumno2));
        
    }


    guardar_localstorage ();