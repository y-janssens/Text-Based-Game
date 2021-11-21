import random


class Player:
    def __init__(self, name, class_, FOR, END, HAB, CHA, INT, INI, ATT, PAR, TIR, NA, PV):
        self.name = name
        self.class_ = class_
        self.FOR = FOR
        self.END = END
        self.HAB = HAB
        self.CHA = CHA
        self.INT = INT
        self.INI = INI
        self.ATT = ATT
        self.PAR = PAR
        self.TIR = TIR
        self.NA = NA
        self.PV = PV

    def roll(self, dice_value):
        self.dices = [4, 6, 8, 10, 20, 100]
        self.dice_value = dice_value

        if self.dice_value in self.dices:
            self.dice_result = random.randint(1, self.dice_value)
        return self.dice_result

    def introduce(self):
        print(f'{self.name} - {self.class_} \nFor: {self.FOR} \nEnd: {self.END} \nHab: {self.HAB} \nCha: {self.CHA} \nInt: {self.INT} \nIni: {self.INI} \nAtt: {self.ATT} \nPar: {self.PAR} \nTir: {self.TIR} \nNa: {self.NA} \nPv: {self.PV}')

    def equipment(self, right_hand, left_hand, dmg, prot):
        self.right_hand = right_hand
        self.left_hand = left_hand
        self.dmg = dmg
        self.prot = prot

        self.dmg = self.dmg + self.roll(8)
        self.prot = self.prot + self.roll(4)
        return self.dmg, self.prot

    def attack(self):
        self.roll(20)
        print(f'{self.name} tente d\'attaquer: ATT {self.ATT}')
        if self.dice_result <= self.ATT:
            print(f'{self.dice_result} réussi')
            self.success = True
        else:
            print(f'{self.dice_result} échec')
            self.success = False

        return self.success, self.dice_result

    def pary(self):
        self.roll(20)
        print(f'{self.name} tente de parer: PAR {self.PAR}')
        if self.dice_result <= self.PAR:
            print(f'{self.dice_result} réussi')
            self.success = True
        else:
            print(f'{self.dice_result} échec')
            self.success = True
        return self.success, self.dice_result

    def dodge(self):
        self.roll(20)
        print(f'{self.name} tente d\'esquiver: HAB {self.HAB}')
        if self.dice_result <= self.HAB:
            print(f'{self.dice_result} réussi')
            self.success = True
        else:
            print(f'{self.dice_result} échec')
            self.success = True
        return self.success, self.dice_result