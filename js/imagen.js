document.addEventListener("click", (e) => {
  if (e.target.id == "clavel") {
    const borderImg = document.getElementById("clavel");

    if (borderImg.style.border == "2px solid red") { //comprueba si la img ya tiene un borde 
      borderImg.style.border = "none"; //si es V elimina el borde 
    } else {
      borderImg.style.border = "2px solid red"; //si es F agrega el borde 
    }
  }
});
