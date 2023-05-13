const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");
const btnConfirmar = document.querySelector("button#confirm");

inputName.addEventListener("input", () => {
  cardName.innerText = inputName.value;
  if (inputName.value.length === 0) {
    cardName.innerText = "Nombre y apellido";
  }
});

inputNumber.addEventListener("input", () => {
  cardNumber.innerText = inputNumber.value;
  if (inputNumber.value.length === 0) {
    cardNumber.innerText = " 0000 0000 0000 0000";
  }
});

inputMonth.addEventListener("input", () => {
  cardMonth.innerText = inputMonth.value;
  if (inputMonth.value.length === 0) {
    cardMonth.innerText = "MM";
  }
});

inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;
  if (inputYear.value.length === 0) {
    cardYear.innerText = "YY";
  }
});

inputCVC.addEventListener("input", () => {
  cardCVC.innerText = inputCVC.value;
});

function confirmar() {
  if (
    inputYear.value.length === 0 ||
    inputMonth.value.length === 0 ||
    inputName.value.length === 0 ||
    inputCVC.value.length === 0 ||
    inputNumber.value.length === 0
  ) {
    Swal.fire({
      title: "Debe ingresar todos los datos solicitados",
      icon: "error",
      confirmButtonText: "Reintentar",
    });
  } else {
    Swal.fire({
      title: "Su pago ha sido aceptado",
      text: "Le llegara un e-mail con la factura",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }
}

btnConfirmar.addEventListener("click", confirmar);
