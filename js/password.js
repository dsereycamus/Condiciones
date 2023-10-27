document.addEventListener("click", (e) => {
  if (e.target.id == "btn-ingresar") { //verifica que el click ocurrió en el botón con id "btn-ingresar"
    const digito1 = document.getElementById("1-digito").value;
    const digito2 = document.getElementById("2-digito").value;
    const digito3 = document.getElementById("3-digito").value; //valores de entrada
    const password = Number(digito1 + digito2 + digito3); //concatenar para password y con trato de n°

    const mensaje = document.getElementById("txt-password");
    password === 911
      ? (mensaje.innerHTML = "Password 1 correcto")
      : password === 714
      ? (mensaje.innerHTML = "Password 2 correcto")
      : (mensaje.innerHTML = "Password incorrecto, inténtelo nuevamente");
  }
});
