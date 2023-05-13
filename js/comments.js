const comments = [];
const URL = "js/comments.json";

fetch(URL)
  .then((response) => response.json())
  .then((data) => comments.push(...data))
  .then(() => cargarComentarios(comments));

function retornoComentarios(comentario) {
  return `<div class="reviews col ">
  <div class="avatar text-center p-2"><img src="${comentario.imagen}"</div>
  <p> ${comentario.puntuacion}<br>
  <strong>Nombre</strong>: ${comentario.nombre}<br>
  <strong>Destino</strong>: ${comentario.pais}</p>
  <p><em> ${comentario.comentario}</p></em>
  </div>`;
}

function cargarComentarios(array) {
  reviews.innerHTML = "";
  array.forEach((comentario) => {
    reviews.innerHTML += retornoComentarios(comentario);
  });
}
