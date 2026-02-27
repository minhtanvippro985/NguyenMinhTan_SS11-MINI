let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];


function showSquad() {
    console.log("\n=> DANH SÁCH:");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}

function addPlayer() {
    let name = prompt("Nhập tên cầu thủ:");
    let goals = parseInt(prompt("Nhập số bàn thắng:"));
    let position = prompt("Nhập vị trí (FW, MF, DF, GK):");
    

    let newId = squad.length > 0 ? squad[squad.length - 1].id + 1 : 1;

    let newPlayer = { id: newId, name, goals, position };
    squad.push(newPlayer);
    
    console.log(`=> Đã thêm: ${name} (ID: ${newId})`);
}

function findPlayer() {
    let idSearch = parseInt(prompt("Nhập ID cầu thủ cần tìm:"));
    let found = squad.find(p => p.id === idSearch);

    if (found) {
        console.log(`=> Tìm thấy: ${found.name} - Vị trí: ${found.position} - Bàn thắng: ${found.goals}`);
    } else {
        console.log("=> Không tìm thấy cầu thủ.");
    }
}


function updateGoal() {
    let idSearch = parseInt(prompt("Nhập ID cầu thủ vừa ghi bàn:"));
    let player = squad.find(p => p.id === idSearch);

    if (player) {
        player.goals += 1;
        console.log(`=> Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng.`);
    } else {
        console.log("=> Không tìm thấy ID này.");
    }
}


function removePlayer() {
    let idSearch = parseInt(prompt("Nhập ID cầu thủ cần xóa:"));
    let index = squad.findIndex(p => p.id === idSearch);

    if (index !== -1) {
        let removed = squad.splice(index, 1);
        console.log(`=> Đã xóa cầu thủ: ${removed[0].name} khỏi đội.`);
    } else {
        console.log("=> Không tìm thấy ID để xóa.");
    }
}


function startManager() {
    let isRunning = true;

    while (isRunning) {
        let menu = `--- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát
Bạn chọn:`;

        let choice = prompt(menu);

        switch (choice) {
            case "1": showSquad(); break;
            case "2": addPlayer(); break;
            case "3": findPlayer(); break;
            case "4": updateGoal(); break;
            case "5": removePlayer(); break;
            case "0": 
                console.log("Chương trình kết thúc.");
                isRunning = false; 
                break;
            default: 
                console.log("Lựa chọn không hợp lệ!"); 
                break;
        }
    }
}


startManager();
