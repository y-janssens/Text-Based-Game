let event_table = {
  1: "Un bruissement dans les fourrés attire votre attention, vous choisissez de l'ignorer.",
  2: "Un grognement retentit dans votre dos, vous parvenez de justesse à éviter le coup de patte d'un ours brun.",
  3: "Une créature d'apparence humaine mais décharnée et défigurée se rue à votre rencontre. Elle semble morte, mais se déplace particulièrement vite.",
};

if (occurence == "rare") {
  chances = 9;
} else if (occurence == "uncommon") {
  chances = 8;
} else if (occurence == "common") {
  chances = 7;
}

function random_event() {
  let frequency = Math.floor(Math.random() * 10) + 1;
  let dict_lenght = Object.keys(event_table).length;
  let rand = Math.floor(Math.random() * dict_lenght) + 1;
  let event = event_table[rand];
  if (frequency > chances) {
    console.log(event);
  }
}