const players = [
    {name : "Messi" , pos : "Forward" , age : 36 , goals : 25 , assists : 15,  matches : 14},
    {name : "Ronaldo" , pos : "Forward" , age : 39 , goals : 30 , assists : 10,  matches : 38},
    {name : "Neymar" , pos : "Forward" , age : 32 , goals : 18 , assists : 20,  matches : 32},
    {name : "De Bruyne" , pos : "MidFielder" , age : 33 , goals : 8 , assists : 25,  matches : 35},
    {name : "Kante" , pos : "MidFielder" , age : 33 , goals : 2 , assists : 5,  matches : 36},
    {name : "Van Dijk" , pos : "Defender" , age : 33 , goals : 5 , assists : 3,  matches : 33},
    {name : "Alisson" , pos : "Goalkeeper" , age : 31 , goals : 0 , assists : 1,  matches : 37},

]


function getFilteredGoals(minNumber , teamplayers){
    let filteredArr = teamplayers.filter((elem , index) => elem.goals >= minNumber);
    let sumGoals = filteredArr.reduce((accum , element,index)=> accum + element.goals,0);
    console.log(`Tổng các bàn thắng của các cầu thủ đạt đủ chỉ tiêu là ${sumGoals}`)

}

getFilteredGoals(5,players);
getFilteredGoals(50,players);
