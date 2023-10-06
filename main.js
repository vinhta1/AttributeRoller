const defaultAbilityScores = [15, 14, 13, 12, 10, 8];

//yoinked from Lab 01
//https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
class Player{
    constructor(characterName = "PC"){
        this.name = characterName;
        this.abilityScores = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0
        };
        let shuffledResult = shuffleArray(defaultAbilityScores);
        for (const [key, value] of Object.entries(this.abilityScores)){
            let abilityValue = shuffledResult.pop();
            this.abilityScores[key] = abilityValue;
        }
    };

    //yoinked from Lab 01
    //https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
    rollAbilities(){
        console.log("Rolling 4d6d1 six times...");
        for (const key in this.abilityScores){
            let results = diceRoller(4,6);
            results.sort(function(a,b){return a - b}); //parameter function is to determine which number is lower
            results.shift();
            let sum = sumArrayElements(results);
            this.abilityScores[key] = sum;
        }
    }

    //yoinked from Lab 01
    //https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
    printPlayer(){
        console.log(`NAME: ${this.name}`);
        for (const [key,value] of Object.entries(this.abilityScores)){
            console.log(`${key.slice(0,3).toUpperCase()}: ${value}`);
        }
    }
}

//Fisher-Yates algorithm for randomly sorting an array
//modified by Professor Nathan for this code. Thanks!
//https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
function shuffleArray(targetArray){
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

//yoinked from Lab 01
//https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
function diceRoller(times,sides){
    let results = [];
    for (let i = 0; i < times; i++){
        results.push(Math.floor(Math.random() * sides + 1));
    }
    return results;
}

//yoinked from Lab 01. Thanks Nate!
//https://pre83.com/CMPM120/Project%2000%20%20The%20Toolset.html
function sumArrayElements(array) {
    return array.reduce((total, currentVal) => total + currentVal);
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player("Valera");
player02.rollAbilities();
player02.printPlayer();