window.onload = blinker();

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
