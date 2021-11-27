let intro_text_1 =
  "Les ombres grandissantes avaient fini par avaler vos espoirs de retrouver les votres. Et à la faveur de la nuit tombante, vos espoirs d'un repas chaud et d'une nuit sèche.<br><br>" +
  "Voici deux heures que votre compagnie s'était égarée dans les bois. Au détour d'un chemin, vous et le second écuyer de votre ordre vous étiez tout simplement perdus. Et cela vous coûterait cher, vous n'en doutiez pas. Ser Gregor ne tolérait pas l'erreur, encore moins quand celle-ci risquait de vous coûter la vie.<br><br>" +
  "Vous tentez de conserver votre contenance, il en va de votre réputation, de la rigueur de votre apprentissage. De votre honneur tout simplement. Mais comment rester serein lorsque votre compagnon cède lentement place à la panique et que la nuit tombe, inexorablement.<br><br>" +
  '"Peut-être que ces bois regorgent des monstres dont les ragots sont omniprésents?"<br><br>' +
  "Tenta-t-il.<br><br>" +
  "Et votre rigueur chevalresque de lui répondre sèchement.<br><br>" +
  '"Cesse donc de croire à ces balivernes. Tu aspires à devenir un Chevalier du Roi par les Trois, comporte toi donc comme tel."<br><br>' +
  "Mais au fond, ne tentez-vous pas de vous rassurer vous-même?<br><br>" +
  '"Il va bientôt faire nuit, et la lune ne nous sera d\'aucune aide sous ce ciel de plomb. Que devons-nous faire?"<br><br>';

function c1_trigger() {
  c1 = document.getElementById("c1").innerHTML;
  $(".choices").css("display", "none");
  text_append(c1.slice(4) + "<br><br>Vous mourrez de froid.");
}

function c2_trigger() {
  c2 = document.getElementById("c2").innerHTML;
  $(".choices").css("display", "none");
  text_append(
    c2.slice(4) +
      "<br><br>La tâche est rude mais vous parvenez à construire un feu de camp."
  );
}

function c3_trigger() {
  c3 = document.getElementById("c3").innerHTML;
  $(".choices").css("display", "none");
  text_append(
    c3.slice(4) +
      "<br><br>Vos hurlements attirent une créature inhumaine qui vous déchiquette en quelques instants."
  );
}
