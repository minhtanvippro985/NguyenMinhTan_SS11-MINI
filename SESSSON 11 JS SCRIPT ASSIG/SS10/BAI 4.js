const players = [
    {name : "Messi" , years: 10 , salary : 100},
    {name : "Ronaldo" , years: 20 , salary : 95},
    {name : "Neymar" , years: 12 , salary : 90},
    {name : "Mbappe" , years: 7 , salary : 85},
    {name : "Haaland" , years: 5 , salary : 80},
    {name : "Modric" , years: 22 , salary : 70},
    {name : "Benzeme" , years: 19 , salary : 75},
];


function analyzeSalar(minYears , team){
    let filteredSalar = players.filter((elem,index) => elem.years >= minYears);
   

    
    let TotalFilter = filteredSalar.reduce((accumb , element) =>  {
        return element.salary + accumb;
    },0)
    let sortedArr = filteredSalar.sort((min,max) => min.salary - max.salary)
  
    let STATS = {
        totalSalary : TotalFilter ,
        highestPaid: sortedArr[sortedArr.length-1],
        lowestPaid: sortedArr[0],
      
    }
  
    // console.log(TotalFilter)
    // console.log(filteredSalar);
    console.log(STATS)
    return STATS
}

analyzeSalar(10 , players)
analyzeSalar(30 , players)

// players.forEach(element => {
//     console.log(element.name)
// })