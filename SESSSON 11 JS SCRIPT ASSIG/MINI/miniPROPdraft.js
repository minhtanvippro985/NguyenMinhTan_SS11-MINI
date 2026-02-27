let students = [
  { id: 1, name: "Nguyen Van A", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Le Thi B", age: 17, gpa: 7.2, status: "active" }
];

function displayStudents(){
   for (let index in students) {
        console.log('---------------------------')
        console.log(`ID : ${students[index].id}`);
        console.log(`Name : ${students[index].name}`);
        console.log(`Age : ${students[index].age}`);
        console.log(`Gpa : ${students[index].gpa}`);
        console.log(`Status : ${students[index].status}`);
        console.log('---------------------------')
    //-----------------------------------

   }
}
function AddNew(){
       let newId = prompt("Nhập ID mới");
            let newName = prompt("Nhập Tên mới");
            let agenew = +prompt("Nhập Tuổi mới");
            let gpanew = +prompt("Nhập gpa mới");
            let statusNew = +prompt("Nhập trạng thái mới");
        const newstudent = {
            id: newId ,
            name: newName,
            age: agenew,
            gpa: gpanew,
            status: statusNew,
        }
        students.push(newstudent);
        alert(`Đã thêm sinh viên ${newName} !`);
}

let isRunning = true ;

while(isRunning == true){
    
    let promptChoice = prompt("Nhập lựa chọn của bạn\n 1.Create student\n2.Read all student\n3.Filter scholarship\n3.Filter Scholarship ");
    switch(promptChoice){
        case "1":
            AddNew()
        break;
        case "2":
            if(students.length == 0){
                alert("Hiện danh sách không có ai!");
            } else {
                displayStudents();
            }
            break;
        case "3":

            break;
        case "9":
            isRunning = false ;
            alert("Tạm biệt!")

            break;
        default :
         console.log("Vui lòng chọn 1 - 8");
        break;
    }
}