function myFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {

		document.getElementById("contenedor").className = "borde1";
  } else {

		document.getElementById("contenedor").className = "borde";
  }
}
