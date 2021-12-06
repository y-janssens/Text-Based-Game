//window.onload = init();
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

  //let j_name = ["Jontrivandouèle Bergstern d'Aloy"];
  player = new Character(j_name, "Ecuyer", 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 60);
  player.equipment("Epée", "Bouclier", 14, 16, ["Camail", 6], ["Chemise de mailles", 9], ["Jambières de mailles", 9]);

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

