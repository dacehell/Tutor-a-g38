$(function () {
  //aqui adentro coloco todo mi jquery
  $('[data-bs-toggle="tooltip"]').tooltip();

  $("#enviar").click(function () {
    alert("El correo fue enviado....");
  });

  $(".title-prep").dblclick(function () {
    $(this).css("color", "red");
  });

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
