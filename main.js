
let ListaDeUsuarios = []

const Usuario = {
  nombre:'',
  apellido: '',
  email:'',
}


document.addEventListener("DOMContentLoaded", function() {
  let aside = document.querySelector("aside");
  aside.style.display = "none";

});


function mostrarBienvenida() {
  document.getElementById("contenido").innerHTML = "";
  let Contenedor = document.createElement("p")
  Contenedor.id = "MensajeId"
  // Mostrar Saludo
  let mensaje = document.createElement("p");
  mensaje.textContent = "¡Bienvenido al Mundo Web!";
  Contenedor.appendChild(mensaje);

  // Agregar botón de cierre
  let cerrarSaludo = document.createElement("img");
  cerrarSaludo.src = "./img/X.png";
  cerrarSaludo.id = "Xicon"
  cerrarSaludo.onclick = function() {
    document.getElementById("contenido").innerHTML = "";
  };
  Contenedor.appendChild(cerrarSaludo);
  document.getElementById("contenido").appendChild(Contenedor);
}

function mostrarFormulario() {
  // Limpiar contenido actual
  document.getElementById("contenido").innerHTML = "";

  // Crear formulario
  let formulario = document.createElement("form");
  formulario.id = "formContainer"

  // Crear campos del formulario
  let campo1 = document.createElement("input");
  campo1.type = "text";
  campo1.placeholder = "Nombre:";
  campo1.id = "Nombre"
  formulario.appendChild(campo1);

  let campo2 = document.createElement("input");
  campo2.type = "text";
  campo2.placeholder = "Apellido:";
  campo2.id = "Apellido"
  formulario.appendChild(campo2);

  let campo3 = document.createElement("input");
  campo3.type = "email";
  campo3.placeholder = "Correo:";
  campo3.id = "Correo"
  formulario.appendChild(campo3);

  let boton = document.createElement("button")
  boton.textContent = "Guardar"
  boton.type = "submit"
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (campo1.value === "" || campo2.value === "" || campo3.value === "") {
      alert("Todos los campos son obligatorios");
    }

    Usuario.nombre = campo1.value
    Usuario.apellido = campo2.value
    Usuario.email = campo3.value
    agregarUsuario()
  });
  formulario.appendChild(boton);


  // Agregar formulario al contenido
  document.getElementById("contenido").appendChild(formulario);

  let Saludo = document.getElementById("Saludar");
  let SaludoStyles = window.getComputedStyle(Saludo);

  if (SaludoStyles.display === "block") { 
    Saludo.style.display = "none";
  }

  let MostrarData = document.getElementById("Grid")
  let MostrarDataStyles = window.getComputedStyle(MostrarData);

  if(MostrarDataStyles.display === "none"){
    MostrarData.style.display = "grid"
  }
  
}

function toggleInicio() {
  document.getElementById("contenido").innerHTML = "";
  let Saludo = document.getElementById("Saludar");
  if (Saludo.style.display === "none") {
    Saludo.style.display = "block";
  } else { 
    Saludo.style.display = "none";
  }

  let MostrarData = document.getElementById("Grid")

  if(MostrarData.style.display === "grid"){
    MostrarData.style.display = "none"
  }
}


function toggleAside() {
  let aside = document.querySelector("aside");
  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else { 
    aside.style.display = "none";
  }
}

function agregarUsuario(){

  const formulario = document.getElementById("formContainer")

  let nuevoUsuario = {
    nombre: Usuario.nombre,
    apellido: Usuario.apellido,
    email: Usuario.email,
  };


  ListaDeUsuarios.splice(0, ListaDeUsuarios.length);
  ListaDeUsuarios.push(nuevoUsuario);
  formulario.reset()

  MostrarUsuario()

  LimpiarObjeto()
}


function  LimpiarObjeto(){
  Usuario.nombre = ""
  Usuario.apellido = ""
  Usuario.email = ""
}

function MostrarUsuario () {

  const GridUsuario = document.getElementById("Grid")

  ListaDeUsuarios.forEach((usuario) =>{
    const {nombre, apellido, email} = usuario

    let valor1 = document.createElement("p")
    valor1.textContent = `${nombre}`
    valor1.classList.add("GridItem");
    GridUsuario.appendChild(valor1)

    let valor2 = document.createElement("p")
    valor2.textContent = `${apellido}`
    valor2.classList.add("GridItem");
    GridUsuario.appendChild(valor2)

    let valor3 = document.createElement("p")
    valor3.textContent = `${email}`
    valor3.classList.add("GridItem");
    GridUsuario.appendChild(valor3)

   

    const eliminar = document.createElement("img")
    eliminar.classList.add("GridItem", "eliminar");
    eliminar.onclick = () => eliminarUsuario(valor3.dataset.id)
    eliminar.src = "./img/X.png"
    eliminar.id = "Xicon2"
    GridUsuario.appendChild(eliminar)

    valor1.dataset.id = nombre
    valor2.dataset.id = nombre
    valor3.dataset.id = nombre
    eliminar.dataset.id = nombre

  })
}


function eliminarUsuario(nombre) {
  ListaDeUsuarios = ListaDeUsuarios.filter(usuario => usuario.nombre !== nombre);

  const GridUsuario = document.getElementById("Grid");
  const elementos = GridUsuario.getElementsByClassName("GridItem");
  
  Array.from(elementos).forEach(elemento => {
    if (elemento.dataset.id === nombre  ) {
      GridUsuario.removeChild(elemento);
    }
  });

}




