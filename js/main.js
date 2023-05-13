function cargarCombo(select, array) {
  if (array.length > 0) {
    array.forEach((element) => {
      select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`;
    });
  }
}
cargarCombo(selectContinente, datosContinente);
cargarCombo(selectAbono, datosAbono);

function ocultarCotizacion() {
  $("#cotizacion").hide();
}

$("#btn").click(function () {
  $("#cotizacion").show(500);
});

function validarPax() {
  selectPax.value > 10
    ? alerta(
        "",
        "Lo sentimos, no realizamos cotizaciones a grupos de más de 10 personas.",
        "error",
        "Reintentar"
      ) &
      (selectPax.value = "1") &
      ocultarCotizacion()
    : validarCampos();
}

function validarCampos() {
  selectContinente.value == "Seleccionar" ||
  selectAbono.value == "Seleccionar" ||
  selectInicio.value == "" ||
  selectFin.value == ""
    ? alerta(
        "",
        "Por favor, completa todos los valores solicitados en pantalla.",
        "warning",
        "Ok"
      ) & ocultarCotizacion()
    : validarFechas();
}

function validarFechas() {
  selectInicio.value >= selectFin.value
    ? alerta(
        "",
        "No es posible seleccionar una fecha de inicio posterior a la fecha de finalización.",
        "error",
        "Reintentar"
      ) &
      (selectFin.value = "") &
      (selectInicio.value = "") &
      ocultarCotizacion()
    : continuarCotizacion();
}

function continuarCotizacion() {
  let fechaInicio = new Date(selectInicio.value).getTime();
  let fechaFin = new Date(selectFin.value).getTime();
  let diferencia = fechaFin - fechaInicio;
  let dias = diferencia / (1000 * 60 * 60 * 24);

  if (dias >= 365) {
    alerta(
      "",
      "Lo sentimos, no realizamos cotizaciones por un tiempo superior a un año.",
      "error",
      "Ok"
    );
    ocultarCotizacion();
    selectFin.value = "";
    selectInicio.value = "";
  } else {
    const cotizo = new Cotizador(
      parseInt(selectPax.value),
      selectContinente.value,
      selectAbono.value
    );
    valorSeguro.textContent = cotizo.cotizar() * dias;
  }
  guardarFormularioEnLS();
}

function guardarFormularioEnLS() {
  const datosDeFormulario = {
    continente: selectContinente.value,
    inicio: selectInicio.value,
    fin: selectFin.value,
    pasajeros: selectPax.value,
    abono: selectAbono.value,
    dias:
      (new Date(selectFin.value).getTime() -
        new Date(selectInicio.value).getTime()) /
      (1000 * 60 * 60 * 24),
  };
  localStorage.setItem("datosDeForm", JSON.stringify(datosDeFormulario)) || [];
}

function recuperarDatosDeFormulario() {
  const datosDeFormulario = JSON.parse(localStorage.getItem("datosDeForm"));
  if (datosDeFormulario) {
    selectContinente.value = datosDeFormulario.continente;
    selectInicio.value = datosDeFormulario.inicio;
    selectFin.value = datosDeFormulario.fin;
    selectPax.value = datosDeFormulario.pasajeros;
    selectAbono.value = datosDeFormulario.abono;
  }
}
recuperarDatosDeFormulario();
