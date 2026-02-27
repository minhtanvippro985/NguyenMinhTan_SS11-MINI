let studentList = [
    {
        id : 1,
        name : "Peter Parker",
        age : 18,
    },
    {
        id : 2,
        name : "Tony Stark",
        age : 18,
    },
    {
        id : 3,
        name : "Nate HiggerSon",
        age : 21,
    },
]


//muốn truy cập vào thì !

console.log(studentList[0].id); // 1
console.log(studentList[0].name); // peter 
console.log(studentList[0].age); //18


for(let student of studentList){  // lấy hết
    console.log(student.id);
    console.log(student.name); 
};


studentList.push({id: 4 , name: `Dung` , age: 17})//thêm mới

let above20 = studentList.filter(student => student.age > 20)