/* messageGenerator:
    
    Return three sets of random strings - a basic character generator

    - first array is name of Character
    - second array is race of Character
    - third array is profession of character

- write function that selects each string from each list at random

- returns them */

const charName = ["Aldric Blackthorn", "Elara Stormbringer", "Gareth Ironheart", "Lyanna Shadowblade", "Kaelthorn Fireforge", "Elysia Moonshadow", "Dorian Grimsworn", "Isolde Ravenshadow", "Thorne Bloodfang", "Faelan Nightwhisper", "Seraphina Frostbloom", "Cassius Stormrider"];

const charRace = ["Human", "Elf", "Dwarf", "Orc", "Halfling", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Dragonborn", "Goblin", "Aasimar"];

const charProfession = ["Warrior", "Mage", "Rogue", "Cleric", "Paladin", "Ranger", "Bard", "Druid", "Sorcerer", "Monk", "Necromancer", "Alchemist"];

function randInt() { // returns a random number from 0 to 11 to access the arrays by index positioning
    let num = (Math.floor(Math.random()*12))
    return num
}

console.log(`Random RPG character generator program v0.1

You have generated:

${charName[randInt()]}, who is a ${charRace[randInt()]}. They are a ${charProfession[randInt()]}.`);
