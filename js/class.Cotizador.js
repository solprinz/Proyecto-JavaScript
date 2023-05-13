class Cotizador {
  constructor(factorContinente, factorAbono, cantidadPax) {
    this.factContinente = factorContinente;
    this.factAbono = factorAbono;
    this.pax = parseInt(cantidadPax);
  }
  cotizar() {
    return (this.factContinente * this.factAbono * this.pax).toFixed(2);
  }
}
