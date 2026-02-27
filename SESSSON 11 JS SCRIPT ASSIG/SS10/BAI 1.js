const player = {
    name : "Messi",
    position : "Forward",
    age : 36 ,
    goals : 25,
    assits : 15,
};


function showplayerinfo(person){
    // for (let key in person) {
    //  console.log(person[key])   ;
    // }
    console.log(`Tên ${person.name}`);
    console.log(`Vị trí ${person.position}`);
    console.log(`Tuổi ${person.age}`);
    console.log(`Bàn thắng mùa này ${person.goals}`);
    console.log(`Kiến tạo mùa này ${person.assits}`);
    console.log(`Tổng đóng góp ${(person.goals) +(person.assits)}`)
}


showplayerinfo(player)