j2 = new Player("Flibert", "Ecuyer", 8, 9, 9, 8, 8, 8, 9, 8, 8, 8, 65);

intro = fetch("intro.txt")
  .then((response) => response.text())
  .then((text) => (document.getElementById("intro").innerHTML = text));

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

//window.onload = init();

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

      j1 = new Player(j_name, "Ecuyer", 9, 10, 8, 8, 8, 8, 9, 8, 8, 8, 60);
      j1.equipment("Epée", 14, 8);
      j1.introduce();

      document.getElementById("start").innerHTML = "Bienvenue " + j_name + "!";
      $("#start").append(
        "<br><br> Vous êtes un écuyer au service de votre Maître, le Chevalier de Montargue."
      );
      $(".game_content").append(
        "<br> Votre compagnie s'est égarée lors d'une patrouille en forêt, vous êtes désormais seul en compagnie de " +
          j2.name +
          ", un autre écuyer de deux ans votre cadet. <br><br> Votre équipement se compose d'une " +
          j1.weapon +
          " et d'un bouclier. La nuit tombe et vous ne disposez ni de vivres, ni d'abri. <br><br> Que faites vous? <br><br>"
      );
      setTimeout(function () {
        $(".game_content").append(choices_1);
      }, 1000);
    }
  });
});

function c1_trigger() {
  $("#c2").css("display", "none");
  $("#c3").css("display", "none");
  $(".game_content").append("<br><br>Vous mourrez de froid.");
}

function c2_trigger() {
  $("#c1").css("display", "none");
  $("#c3").css("display", "none");
  $(".game_content").append(
    "<br><br>La tâche est rude mais vous parvenez à construire un feu de camp."
  );
}

function c3_trigger() {
  $("#c1").css("display", "none");
  $("#c2").css("display", "none");
  $(".game_content").append(
    "<br><br>Vos hurlements attirent une créature inhumaine qui vous déchiquette en quelques instants."
  );
}
