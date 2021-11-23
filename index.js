//window.onload = init();

intro = fetch("intro.txt")
  .then((response) => response.text())
  .then((text) => (document.getElementById("intro").innerHTML = text));

function init() {
  $("#intro").css("display", "none");
  $("#new_game").css("display", "none");
  $("#start").css("visibility", "visible");
  $(".game_content").css("visibility", "visible");
}

let choices_1 = document.getElementById("choices_1").innerHTML;

$(document).ready(function () {
  $("#start_input").keydown(function (event) {
    if (event.keyCode == 13) {
      this.form.submit();
      let j_name = document.getElementById("start_input").value.capitalize();

      player = new Character(j_name, "Ecuyer", 9, 10, 8, 8, 8, 8, 9, 8, 8, 2, 60);
      player.equipment("épée", 14, 8);

      document.getElementById("start").innerHTML = "Bienvenue " + j_name + "!";
      $("#start").append(
        "<br><br> Vous êtes un écuyer au service de votre Maître, le Chevalier de Montargue."
      );
      $(".game_content").append(
        "<br> Votre compagnie s'est égarée lors d'une patrouille en forêt, vous êtes désormais seul en compagnie de " +
        npc_1.name +
          ", un autre écuyer de deux ans votre cadet. <br><br> Votre équipement se compose d'une " +
          player.weapon +
          " et d'un bouclier. La nuit tombe et vous ne disposez ni de vivres, ni d'abri. <br><br> Que faites vous? <br><br>"
      );
      setTimeout(function () {
        $(".game_content").append(choices_1);
      }, 1000);
    }
  });
});

function c1_trigger() {
  c1 = document.getElementById('c1').innerHTML;
  $("#c1").css("display", "none");
  $("#c2").css("display", "none");
  $("#c3").css("display", "none");
  $(".game_content").append(c1.slice(4) + "<br><br>Vous mourrez de froid.");
}

function c2_trigger() {
  c2 = document.getElementById('c2').innerHTML;
  $("#c1").css("display", "none");
  $("#c2").css("display", "none");
  $("#c3").css("display", "none");
  $(".game_content").append(c2.slice(4) + "<br><br>La tâche est rude mais vous parvenez à construire un feu de camp.");

}

function c3_trigger() {
  c3 = document.getElementById('c3').innerHTML;
  $("#c1").css("display", "none");
  $("#c2").css("display", "none");
  $("#c3").css("display", "none");
  $(".game_content").append(c3.slice(4) + "<br><br>Vos hurlements attirent une créature inhumaine qui vous déchiquette en quelques instants.");
}
