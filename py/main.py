import curses
import time
from curses import wrapper
from classes import Player

intro =  open('intro.txt', 'r', encoding="UTF-8")

def main(stdscr):
    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(2, curses.COLOR_BLUE, curses.COLOR_BLACK)
    GREEN_COLOR = curses.color_pair(1)
    BLUE_COLOR = curses.color_pair(2)

    for i in range(100):
        stdscr.clear()
        color = GREEN_COLOR

        if i % 2 == 0:
            color = BLUE_COLOR

        stdscr.addstr(f'Count: {i}', color)
        time.sleep(0.1)

        #stdscr.addstr(1, 55, "Morguestanc", BASIC_COLOR | curses.A_BOLD)
        #stdscr.addstr(3, 0, intro.read(), curses.A_ITALIC)
        stdscr.refresh()
    stdscr.getch()

wrapper(main)


"""print(f'Morguestanc \n\n {intro.read()}')

start = input('Comment se nomme votre personnage? ')
j1 = Player(start, 'Chevalier', 10, 10, 11, 11, 8, 10, 12, 11, 8, 1, 85)
j1.equipment('Epée', 'Bouclier', 14, 16)
print(f'Bienvenue {j1.name}. Vous êtes un {j1.class_} au service de votre Roi.\nVotre équipement se compose d\'une {j1.right_hand} et d\'un {j1.left_hand}.\n\n')

next = input('Appuyez sur Entrée pour continuer') """


""" j1.attack()
if j1.success == True:
    j2.pary()
    j2.PV -= (j1.FOR * 2) - j2.END
    print(j2.PV) """



