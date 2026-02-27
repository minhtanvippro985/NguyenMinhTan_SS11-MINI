let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

// let isRunning = true
function displaySquad(){
    for (let index in squad) {
        console.log(`ID : ${squad[index].id} - ${squad[index].name} - ${squad[index].goals} bàn`);
    }
}


while(true){
  
    let choice = prompt("------FOOTBALL MANAGER PRO----\n 1.Xem đội \n 2.Thêm cầu thủ \n 3.Tìm kiếm theo ID \n 4.Cập nhật bàn thắng \n 5. Xóa (Chuyển nhương) \n 0.Thoát")
    switch(choice){
        case "1":
            displaySquad();
            break;
        case "2":
            let newPlayer = {
                id : Math.random()
                name : 
                goals :
                position :
            }
            break;
    }
};