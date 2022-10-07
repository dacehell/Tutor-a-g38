$(document).ready(function () {
  var boton1 = $(".boton1");

  boton1.on("click", function () {
    console.log("me diste click");
    $(".boton1").fadeOut();
  });

  $("h1").click(function () {
    $(this).css("color", "blue");
  });

  $("h2").dblclick(function () {
    $(this).css({
      "background-color": "pink",
      color: "yellow",
      height: "90px",
    });
  });

  $("#parrafo").mouseleave(function () {
    $(this).hide();
  });

  $("#parrafo2").hover(function () {
    $(this).css({
      "background-color": "red",
      color: "yellow",
      height: "190px",
    });
  });

  $(".boton2").click(function () {
    $(".box1").animate({ left: "300px" }, "slow");
  });

  $(".boton3").click(function () {
    var box2 = $(".box2");

    box2.animate({ height: "300px", opacity: "0.4" }, "slow");
    box2.animate({ width: "300px", opacity: "0.8" }, "slow");
    box2.animate({ height: "100px", opacity: "0.4" }, "slow");
    box2.animate({ width: "100px", opacity: "0.8" }, "slow");
  });
});
