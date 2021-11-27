class Character {
    constructor(name, class_, FOR, END, HAB, CHA, INT, INI, ATT, PAR, TIR, NA, PV ) {
        this.name = name;
        this.class_ = class_;
        this.FOR = FOR;
        this.END = END;
        this.HAB = HAB;
        this.CHA = CHA;
        this.INT = INT;
        this.INI = INI;
        this.ATT = ATT;
        this.PAR = PAR;
        this.TIR = TIR;
        this.NA = NA;
        this.PV = PV;
    }

    roll(dice_value) {
        var dices = [4, 6, 8, 10, 20, 100];
      
        if (dices.includes(dice_value)) {
          this.result = Math.floor(Math.random() * dice_value) + 1;
          this.value = "1d" + dice_value;

          this.success = this.result + ' réussi';
          this.success = this.success.fontcolor("green");
  
          this.failure = this.result + " échec";
          this.failure = this.failure.fontcolor("red");

          return this.result;
        } else {
          console.log("Enter a valid number: (4, 6, 8, 10, 20, 100)");
        }
    }

    introduce() {
        console.log(this.name, '-' ,this.class_ , '\n' ,
        "For: ", this.FOR, '\n',
        "End: ", this.END, '\n',
        "Hab: ", this.HAB, '\n',
        "Cha: ", this.CHA, '\n',
        "Int: ", this.INT, '\n',
        "Ini: ", this.INI, '\n',
        "Att: ", this.ATT, '\n',
        "Par: ", this.PAR, '\n',
        "Tir: ", this.TIR, '\n',
        "Na: ", this.NA, '\n',
        "Pv: ", this.PV);
    }

    equipment(weapon, dmg, prot) {
        this.weapon = weapon
        this.dmg = dmg
        this.prot = prot

        this.dmg = this.dmg + this.roll(8)
        this.prot = this.prot + this.roll(4)
        return this.dmg, this.prot
    }

    attack() {
        this.roll(20);
        console.log(this.name + " tente d'attaquer: " + "ATT " + this.ATT)
        if (this.result <= this.ATT) {
            console.log(this.result + ' réussi');
        } else {
            console.log(this.result + ' échec');
        }
    }

    pary() {
        this.roll(20)
        console.log(this.name + " tente de parer: " + "PAR " + this.PAR)
        if (this.result <= this.PAR) {
            console.log(this.result + ' réussi');
        } else {
            console.log(this.result + ' échec');
        }
    }

    dodge() {
        this.roll(20)
        console.log(this.name + " tente d'esquiver: " + "HAB " + this.HAB)
        if (this.result <= this.HAB) {
            console.log(this.result + ' réussi');
        } else {
            console.log(this.result + ' réussi');
        }
    }
}