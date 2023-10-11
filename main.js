/* messageGenerator:
    
    Return three sets of random strings - a basic character generator

    - first array is name of Character
    - second array is race of Character
    - third array is profession of character

- write function that selects each string from each list at random

- returns them */

// JavaScript in main.js

const char = {
  charName: [
      "Aldric Blackthorn", "Elara Stormbringer", "Gareth Ironheart", "Lyanna Shadowblade", "Kaelthorn Fireforge", "Elysia Moonshadow", "Dorian Grimsworn", "Isolde Ravenshadow", "Thorne Bloodfang", "Faelan Nightwhisper", "Seraphina Frostbloom", "Cassius Stormrider",
      "Eldric Shadowthorn", "Elowen Starfall", "Thrain Stonehammer", "Grenak Skullsplitter", "Thistlefoot Greenleaf", "Glimmer Goldensprocket", "Vaedric Stormshadow", "Arya Ravenscar", "Bjorn Ironclaw", "Lunara Moonsong", "Xander Flameheart", "Morgan Windrider"
  ],
  charRace: [
      "Human", "Elf", "Dwarf", "Orc", "Halfling", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Dragonborn", "Goblin", "Aasimar",
      "Troll", "Centaur", "Minotaur", "Fairy", "Gnoll", "Goliath", "Siren", "Kobold", "Lizardfolk", "Warforged", "Changeling", "Kenku"
  ],
  charProfession: [
      "Warrior", "Mage", "Rogue", "Cleric", "Paladin", "Ranger", "Bard", "Druid", "Sorcerer", "Monk", "Necromancer", "Alchemist",
      "Knight", "Summoner", "Assassin", "Priest", "Archmage", "Beastmaster", "Singer", "Shaman", "Elementalist", "Sensei", "Darkmage", "Artificer"
  ]
};


const randInt = (max)=> { // returns a random number using a num input
    return (Math.floor(Math.random()*max))
}

const generateCharacter = () => {
  const characterName = char.charName[randInt(char.charName.length)];
  const characterRace = char.charRace[randInt(char.charRace.length)];
  const characterProfession = char.charProfession[randInt(char.charProfession.length)];
  
  const characterOutput = document.getElementById('character-output');
characterOutput.innerHTML = `
    <p>You have generated:</p>
    <p>Name: ${characterName}</p>
    <p>Race: ${characterRace}</p>
    <p>Profession: ${characterProfession}</p>`
}

const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', () => {
  generateCharacter();
});


/* refined randInt function 
moved arrays into object*/