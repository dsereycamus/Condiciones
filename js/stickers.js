document.addEventListener("click", (e) => {
  if (e.target.id == "btn-verificar") {
    const num1 = document.querySelector("#overlord");
    const num2 = document.querySelector("#onepiece");
    const num3 = document.querySelector("#gintama");

    if ((num1) && (num2) && (num3)) {
      const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);

      if (suma > 10) {
        document.querySelector("#txt-verificar").innerHTML =
          "¡ALTO! Llevas demasiados stickers";
      } else {
        document.querySelector(
          "#txt-verificar"
        ).innerHTML = `Llevas ${suma} stickers`;
      }
    }
  }
});

