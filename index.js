//window.onload = init();
//window.onload = load_toggle();
random_header();

function init() {
  $("#header").css("display", "none");
  $("#new_game").css("display", "none");
  $("#load_game").css("display", "none");
  $("#settings").css("visibility", "visible");
  $("#start").css("visibility", "visible");
  $(".game_content").css("visibility", "visible");
  $('#player').css('display', 'block');
}

$(document).ready(function () {
  $("#start_input").keydown(function (event) {
    if (event.keyCode == 13) {
      this.form.submit();
      let j_name = document.getElementById("start_input").value.capitalize();

  //let j_name = "Adam";
  player = new Character(j_name, "écuyer", 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 60);
  player.equipment("épée", 14, 8);

  //document.getElementById("start").innerHTML = "Bienvenue " + j_name + "! <br><br>";
  document.getElementById("start").innerHTML = "";
  player_panel();
  text_append(intro_text_1);
  separator();
  text_append("Que faites-vous?<br><br>");

  setTimeout(function () {
    text_append(document.getElementById("choices_1").innerHTML);
  }, 1000);
  }
  });
});
