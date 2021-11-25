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
}



$(document).ready(function () {
  $("#start_input").keydown(function (event) {
    if (event.keyCode == 13) {
      this.form.submit();
      let j_name = document.getElementById("start_input").value.capitalize();

      //let j_name = "Adam";
      player = new Character(j_name, "de Corveil", "écuyer", 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 60);
      player.equipment("épée", 14, 8);

      //document.getElementById("start").innerHTML = "Bienvenue " + j_name + "! <br><br>";
      document.getElementById("start").innerHTML = "";
      document.getElementById("player").innerHTML = player.first_name;
      document.getElementById("player_name").innerHTML = player.first_name + " " + player.last_name + " - " + player.class_
      document.getElementById("player_stats").innerHTML = "FOR:" + player.FOR + " END:" + player.END + " HAB:" + player.HAB + " CHA:" + player.CHA + " INT:" + player.INT + " INI:" + player.INI + " ATT:" + player.ATT + " PAR:" + player.PAR + " TIR:" + player.TIR + " NA:" + player.NA + " PV:" + player.PV + "<br>";

      text_append(intro_text_1); 

      //setTimeout(function () {
        text_append(document.getElementById("choices_1").innerHTML);
      //}, 1000);
    }
  });
});

function c1_trigger() {
  c1 = document.getElementById('c1').innerHTML;
  $(".choices").css("display", "none");
  text_append(c1.slice(4) + "<br><br>Vous mourrez de froid.");
}

function c2_trigger() {
  c2 = document.getElementById('c2').innerHTML;
  $(".choices").css("display", "none");
  text_append(c2.slice(4) + "<br><br>La tâche est rude mais vous parvenez à construire un feu de camp.");

}

function c3_trigger() {
  c3 = document.getElementById('c3').innerHTML;
  $(".choices").css("display", "none");
  text_append(c3.slice(4) + "<br><br>Vos hurlements attirent une créature inhumaine qui vous déchiquette en quelques instants.");
}
