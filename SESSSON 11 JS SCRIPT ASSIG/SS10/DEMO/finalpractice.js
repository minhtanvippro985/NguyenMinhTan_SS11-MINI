let studentList = [
    {
        id : 1,
        name : "Peter Parker",
        phone : 18123123231,
    },
    {
        id : 2,
        name : "Tony Stark",
        phone : 18123123123,
    },
    {
        id : 3,
        name : "Nate HiggerSon",
        phone : 21123123123,
    },
]
function displaycont(){
    console.log("-----Your phone list : --------")
    for(let index in studentList){
    console.log("Name:" ,studentList[index].name);
    console.log("Phone:" ,studentList[index].phone);
    console.log("-----------------------");
   }
}
while (true){
let userInput = prompt("Please input C/R/U/D to manage your phone list");

if (userInput === "C" ){ // create
  let name = prompt("Please input new contact name");
  let phone = prompt(`please input new phone for ${name}`);
  let contact = {
    id: Math.random(),
    name: name,
    phone: phone,
  }
 
  studentList.push(contact); // cho vao
 
  

} else if(userInput === "R"){ // read
    displaycont()
} else if(userInput === "U"){ // update
    let name = prompt("Please input contact name that you want to update");
    let index = studentList.findIndex(function(element , index){
        return element.name === name; // 
    })
    if(index === -1) {
        console.log("Contact not FOUND");
    } else {
       let phone = prompt(`Please input phone for ${name}`);
       studentList.phone[index] = phone;
       displaycont()
    }
} else if(userInput === "D"){ //delete
    let name = prompt("Input name that you want to delete");
    let index = studentList.findIndex(function(element,index){
        return element.name === name;
    });
    if(index === -1){
        console.log("Not found");
    } else{
        studentList.splice(index ,1); // xoa thanh cong!
        displaycont();
    }
} else if(userInput === "E"){
    console.log("Thanks!")
    break;
}
}