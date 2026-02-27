const teamHistor = [
    {
        name : "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023":{matches : 34 , goals : 21, assists : 14, yellowCards: 3,},
            "2023-2024":{matches : 32 , goals : 25, assists : 15, yellowCards: 2,},
            "2024-2025":{matches : 28 , goals : 21, assists : 14, yellowCards: 3,},
        },
    },
     {
        name : "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023":{matches : 38 , goals : 28, assists : 6, yellowCards: 5,},
            "2023-2024":{matches : 35 , goals : 30, assists : 10, yellowCards: 4,},
            "2024-2025":{matches : 30 , goals : 22, assists : 9, yellowCards: 3,},
        },
    },
]
function generatePlayerSeasonReport(playerName, team) {
    
    const player = team.find(p => p.name === playerName);
    if (!player) return "Không tìm thấy cầu thủ";

    const seasonsArray = Object.entries(player.seasons);
    const careerStats = seasonsArray.reduce((acc, [seasonName, data]) => {
        acc.totalMatches += data.matches;
        acc.totalGoals += data.goals;
        acc.totalAssists += data.assists;
        acc.totalYellowCards += data.yellowCards;
        return acc;
    }, { totalMatches: 0, totalGoals: 0, totalAssists: 0, totalYellowCards: 0 });

    careerStats.averageGoalsPerMatch = +((careerStats.totalGoals / careerStats.totalMatches).toFixed(2));
    careerStats.averageAssistsPerMatch = +((careerStats.totalAssists / careerStats.totalMatches).toFixed(2));


    let bestSeasonName = "";
    let bestData = { goals: -1, assists: -1 };

    for (const [name, data] of seasonsArray) {
        if (data.goals > bestData.goals || (data.goals === bestData.goals && data.assists > bestData.assists)) {
            bestData = data;
            bestSeasonName = name;
        }
    }

    careerStats.bestSeason = {
        season: bestSeasonName,
        goals: bestData.goals,
        assists: bestData.assists
    };

   
    const finalReport = {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: careerStats
    };

    console.log(finalReport);
    return finalReport;
}


generatePlayerSeasonReport("Messi", teamHistor);