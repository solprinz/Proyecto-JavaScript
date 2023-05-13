btnReset.addEventListener("click", ocultarCotizacion);
btnCotizar.addEventListener("click", validarPax);
btnEmail.addEventListener("click", enviarCotizacion);
btnSuscripcion.addEventListener("click", suscribirse);

function enviarCotizacion() {
  Swal.fire({
    title: "Ingresa tu e-mail:",
    input: "text",
    inputAttributes: { autocapitalize: "off" },
    showCancelButton: true,
    confirmButtonText: "Enviar cotización",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Le hemos enviado la cotización. Gracias. `,
        icon: "success",
      });
    }
  });
}

function alerta(title, text, icon, btn) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: btn,
  });
}

function suscribirse() {
  Swal.fire({
    title: `¡Gracias por suscribirte!. `,
    icon: "success",
  });
}
