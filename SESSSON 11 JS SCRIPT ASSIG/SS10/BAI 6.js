const players = [
    {name : "Messi" , pos : "Forward" , age : 36 , goals : 25 , assists : 15,  matches : 14},
    {name : "Ronaldo" , pos : "Forward" , age : 39 , goals : 30 , assists : 10,  matches : 38},
    {name : "Neymar" , pos : "Forward" , age : 32 , goals : 18 , assists : 20,  matches : 32},
    {name : "De Bruyne" , pos : "MidFielder" , age : 33 , goals : 8 , assists : 25,  matches : 35},
    {name : "Kante" , pos : "MidFielder" , age : 33 , goals : 2 , assists : 5,  matches : 36},
    {name : "Van Dijk" , pos : "Defender" , age : 33 , goals : 5 , assists : 3,  matches : 33},
    {name : "Alisson" , pos : "Goalkeeper" , age : 31 , goals : 0 , assists : 1,  matches : 37},
];

function generateRankingReport(minMatches, playersList) {

    let rankedPlayers = playersList
        .filter(p => p.matches >= minMatches)
        .map(p => {
            const performanceScore = parseFloat(((p.goals + p.assists) / p.matches).toFixed(2));
            const yellowCards = p.yellowCards || 0; 
            const efficiencyScore = parseFloat((performanceScore - (yellowCards / p.matches) * 10).toFixed(2));
            
            return { ...p, performanceScore, efficiencyScore };
        });

    rankedPlayers.sort((a, b) => {
        if (b.efficiencyScore !== a.efficiencyScore) return b.efficiencyScore - a.efficiencyScore;
        if (b.performanceScore !== a.performanceScore) return b.performanceScore - a.performanceScore;
        return b.goals - a.goals;
    });


    console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)`);
    
    rankedPlayers.forEach((p, index) => {
        console.log(`${index + 1}. ${p.name.padEnd(10)} - Efficiency: ${p.efficiencyScore.toFixed(2)} | Performance: ${p.performanceScore.toFixed(2)} | Goals: ${p.goals}`);
    });

   
    const totalCount = rankedPlayers.length;
    console.log(`Tổng số cầu thủ xếp hạng: ${totalCount}`);

    if (totalCount > 0) {
        console.log(`Cầu thủ xuất sắc nhất: ${rankedPlayers[0].name}`);
        
        const top3 = rankedPlayers.slice(0, 3);
        const avgEfficiencyTop3 = (top3.reduce((sum, p) => sum + p.efficiencyScore, 0) / top3.length).toFixed(2);
        console.log(`Trung bình efficiency top ${top3.length}: ${avgEfficiencyTop3}`);
    }
}


generateRankingReport(30, players);
