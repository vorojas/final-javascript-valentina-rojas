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
           document.getElementById("resultado").innerText = "En ${faltanTantosDias} días pasaras a la proxima sala";
        } else {
           document.getElementById("resultado").innerText = "Ingresa una fecha valida";
        } 
    };


    let  archivoAlumnos=  [ ] ;

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

        };

    


  //carga los registros desde el localstorage si existen. Caso contrario los trae desde la API jsonplaceholder personalizada
    const obtenerData = async () =>{
        try {
            const origen = await axios.get(`https://my-json-server.typicode.com/vorojas/final-javascript-valentina-rojas/entradas`);
            console.log("Base de datos de ejemplo cargada");
            origen.data.forEach(objeto => {
                archivoAlumnos.push(new Impresion(objeto.id,objeto.nombrePadre,objeto.nombreNinio,objeto.telefono));
            });
            representaArreglo();
        } catch (error) {
            console.log(error);
        }
    }

    if (localStorage.getItem('archivoAlumnos') != null){
        let entradas = [];
        entradas = JSON.parse(window.localStorage.getItem('archivoAlumnos'));
        console.log('Base de datos local cargada')
        entradas.forEach(objeto => {
            archivoAlumnos.push(new Impresion(objeto.id,objeto.nombrePadre,objeto.nombreNinio,objeto.telefono));
        });
    }else{
        obtenerData();
    }   


    //Agrega un nuevo alumno a la lista y luego actualiza la tabla para mostrarlo
    if(nombrePadre != "" && nombreNinio != "" && telefono != ""){
        let alumno = new alumno(generarID(),nombrePadre,nombreNinio,telefono);
        archivoAlumnos.push(alumno);
        localStorage.archivoAlumnos = JSON.stringify(archivoAlumnos); //guarda en local storage
        representaArreglo(archivoAlumnos);

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
    };


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

             

    
        localStorage.setItem ("nombre", JSON.stringify(alumno1, alumno2, alumno3));
        
    }


    guardar_localstorage ()