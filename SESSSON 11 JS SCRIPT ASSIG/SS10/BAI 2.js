const player ={
    name :"De Bruyne",
    pos : "MidFielder",
    goals : 8,
    assists : 25,
    matchesPlayed : 35,
};


function addPerform(person){
        let score = (person.goals + person.assists) / person.matchesPlayed;
        person.performanceSCORE = score
        if(score >= 1){
            person.IsKeyPlayer = true
        } else {
            person.IsKeyPlayer = false
        }
       
}

addPerform(player)
    
    for (let key in player) {
        console.log(` ${key} : ${player[key]}`)
    }