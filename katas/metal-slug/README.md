# Metal Slug

Before shooter games exist, there was a time when 2D games used to give very nice "shooting" experiences. One of those was a game called "Metal Slug". The game basically consist on getting into the role of a soldier that is assigned to a mission where he/she moves around an scenario and must confront multiple enemies and save some civilians in the way. At the end of each mission, a final boss must be defeated in order to have mission completed.

The soldier basically has three abilities: shoot a weapon, use a knife and throw granades. The default weapon is a handgun that can be used to shot and kill enemies by reducing their health points by 1. The soldier always have same resistance to one single shoot before to die unless he/she gets a vehicle where resistance depends on vehicle's health:

* Tank: 3 points of health
* Plain: 4 points of health
* Camel: 1 point of health
* Submarine: 3 points of health

Each shot that soldier/vehicle gets from the enemy, removes 1 point of health from soldier/vehicle. When health points from vehicle is 0, vehicle is lost. When health points from soldier is 0, the soldier dies, losing a life. Soldier has 3 lifes by default, when lifes are 0, the game is over.

Soldier can also be equiped with multiple types of weapons that increase his/her attack power (attack power defines how many health points it takes from enemies when they get shot)

* Shotgun: adds 5 points to attack power, can hit multiple enemies
* Heavy Machine Gun: adds 2 points to attack power, can hit one single enemy
* Rocket Launcher: adds 4 points to attack power, can hit one single enemy
* Flame Shot: adds 5 points to attack power, can hits multiple enemies

If enemy is close enough, soldier can use a knife and reduce his/her health points by 1. In addition, granades can hit a group of enemies with an attack power of 10

Enemies are also equiped with their own weapons and vehicles, those vary depending if they are soldiers, mercenaries, aliens, bosses or vehicles. All can attack, but just some of them have special abilites like throw granades, become temporary invulnerable (even if shot, they don't get damage from any type of type of weapon shoot).

Finally, civilians can be found in the way, and soldiers are capable to save them by using his/her knife and release them. Gratefully, prisoner releases a weapon that 
soldier can opt to take and equip as his current weapon.

As OOP coder, you are tasked to write an OOP program that can emulate Metal Slug behavior described above using classes and objects that represent each element of the game. Leverage OOP concepts like encapsulation, inheritance, interfaces, etc. Also, during your desing phase, try to apply SOLID principles.