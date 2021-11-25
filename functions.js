window.onload = blinker();

let panel = false;
let games = false;
//window.onload = panel_toggle();
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

function blinker() {
  if ($("input[type=text]").attr("placeholder")) {
    // get the placeholder text
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

function panel_toggle() {
  if (panel == false) {
    panel = true;
    $('#player_panel').css('display', 'block');
  } else {
    panel = false;
    $('#player_panel').css('display', 'none');
  }
}

function panel_close() {
  if (panel == true) {
    panel = false;
    $('#player_panel').css('display', 'none');
  }
}

function load_toggle() {
  if (games == false) {
    games = true;
    $('#games_list').css('display', 'block');
  } 
}

function load_close() {
  if (games == true) {
    games = false;
    $('#games_list').css('display', 'none');
  }
}