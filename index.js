class Hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
}

const itemName = ["wizard" , "warrior", "monk","ninja"]
const itemAge = 0
const itemType = [1, 2, 3, 4]
const itemHero = new Hero(itemName, itemAge, itemType)
let type
let attack

for(let i = 0; i <= itemType.length; i++)
    if(i == 1){
        type = itemName[0]
        attack = "magic"
    }
    else if(i == 2){
        type = itemName[1]
        attack = "sword"
    }else if(i == 3){
        type = itemName[2]
        attack = "martial arts"
    }else if(i == 4){
        type = itemName[3]
        attack = "shuriken"
    }
function atack(){
    let msg = console.log("The " + type +  " attacked using " + attack)
    return msg
}
atack()