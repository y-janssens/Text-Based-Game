window.onload = blinker();

let panel = false;
let games = false;
let settings = false;
let sound = true;
//window.onload = panel_toggle();
//window.onload = load_toggle();
//window.onload = set();

function player_panel() {
  $(".hr2").css("visibility", "visible");
  document.getElementById("player").innerHTML = player.name;
  document.getElementById("player_name").innerHTML =
    player.name + " - " + player.class_;
  document.getElementById("player_stats").innerHTML =
    "FOR:" +
    player.FOR +
    " END:" +
    player.END +
    " HAB:" +
    player.HAB +
    " CHA:" +
    player.CHA +
    " INT:" +
    player.INT +
    " INI:" +
    player.INI +
    " ATT:" +
    player.ATT +
    " PAR:" +
    player.PAR +
    " TIR:" +
    player.TIR +
    " NA:" +
    player.NA +
    " PV:" +
    player.PV;
    
    document.getElementById("player_stuff").innerHTML = 
    "<h3>Equipement</h3>"  + 
    "- " + player.weapon + ": " + player.dmg + "<br>" + 
    "- " + player.shield + ": " + player.prot + "<br><br>" +
    "- " + player.head[0] + ": " + player.head[1] + "<br>" + 
    "- " + player.torso[0] + ": " + player.torso[1] + "<br>" + 
    "- " + player.legs[0] + ": " + player.legs[1] + "<br>";

    document.getElementById("player_skills").innerHTML = 
    "<h3>Compétences</h3>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>";

    document.getElementById("player_inventory").innerHTML = 
    "<h3>Inventaire</h3>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>" +
    "- " + "<br>";
}

function edit_name() {
  document.getElementById("player_name").innerHTML =
    '<form action="javascript:void(null)"><input type="text" id="player_edit"></form>';
  $("#player_edit").keydown(function (event) {
    if (event.keyCode == 13) {
      this.form.submit();
      player.name = document.getElementById("player_edit").value.capitalize();
      document.getElementById("player").innerHTML = player.name;
      player_panel();
    }
  });
}

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

function blinker() {
  if ($("input[type=text]").attr("placeholder")) {
    $("input[type=text]").attr("placeholder", "");
  } else {
    $("input[type=text]").attr("placeholder", "|");
  }
  setTimeout(blinker, 1000);
}

function text_append(game_content) {
  let game = document.getElementById("game");
  game.innerHTML += game_content;
}

function separator() {
  let game = document.getElementById("game");
  game.innerHTML += '<div id="separator">◈</div>';
}

function append_continue() {
  setTimeout(function () {
    text_append(document.getElementById("continue_game").innerHTML);
    $("#continue").css("display", "block");
  }, 1000);
}

function continue_game() {
  $("#continue").css("display", "none");
  text_append("<br><br><br>À suivre...");
}

function panel_toggle() {
  if (panel == false) {
    panel = true;
    $("#player_panel").css("display", "block");
  } else {
    panel = false;
    $("#player_panel").css("display", "none");
  }
}

function panel_close() {
  if (panel == true) {
    panel = false;
    $("#player_panel").css("display", "none");
  }
}

function load_toggle() {
  if (games == false) {
    games = true;
    $("#games_list").css("display", "block");
  }
}

function load_close() {
  if (games == true) {
    games = false;
    $("#games_list").css("display", "none");
  }
}

function set() {
  if (settings == false) {
    settings = true;
    $("#settings_panel").css("display", "block");
  } else {
    settings = false;
    $("#settings_panel").css("display", "none");
  }
}

function sound_toggle() {
  if (sound) {
    sound = false;
    document.getElementById("sound").innerHTML = "Son / OFF";
  } else {
    sound = true;
    document.getElementById("sound").innerHTML = "Son / ON";
  }
}

function quit() {
  location.reload();
}
