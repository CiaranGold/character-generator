/* messageGenerator:
    
    Return three sets of random strings - a basic character generator

    - first array is name of Character
    - second array is race of Character
    - third array is profession of character

- write function that selects each string from each list at random

- returns them */

const char = {
    charName: [
      "Aldric Blackthorn", "Elara Stormbringer", "Gareth Ironheart","Lyanna Shadowblade", "Kaelthorn Fireforge", "Elysia Moonshadow", "Dorian Grimsworn", "Isolde Ravenshadow", "Thorne Bloodfang", "Faelan Nightwhisper", "Seraphina Frostbloom", "Cassius Stormrider"
    ],
    charRace: [
      "Human", "Elf", "Dwarf", "Orc", "Halfling", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Dragonborn", "Goblin", "Aasimar"
    ],
    charProfession: [
      "Warrior", "Mage", "Rogue", "Cleric", "Paladin", "Ranger", "Bard", "Druid", "Sorcerer", "Monk", "Necromancer", "Alchemist"
    ]
  };

const randInt = (max)=> { // returns a random number using a num input
    return (Math.floor(Math.random()*max))
}

console.log(`Random RPG character generator program v0.2

You have generated:

${char.charName[randInt(char.charName.length)]}, who is a ${char.charRace[randInt(char.charRace.length)]}. They are a ${char.charProfession[randInt(char.charProfession.length)]}.`);


/* refined randInt function 
moved arrays into object*/