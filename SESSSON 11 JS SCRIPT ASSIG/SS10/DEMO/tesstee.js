

let person = {
    name: "Peter",
    age: "18",
    hometown: "Ha Noi",
    job: "Coder",
    single: "true",
    hobbies: ["Listen to music" ,"Reading books"],
    sayHi: function(){
        console.log("Hello everyone!!");
    },
};

// person.add = "yes"

// console.log(person);
// console.log(person.name); // "peter"
// console.log(person.hobbies);

let prop = "name"
console.log(person[prop]);


console.log(person.sayHi);

for (let key in person){
    console.log(person[key]);// lay info tu key
    console.log(key) // lay cac thu nhu la ten thuoc tinh
}


// Object.keys(person)
// Object.values(person)


// them moi
person.job = "Chay grab"; // chinh sua
delete person.job; // mat viec
person.weight ="70kg";
person.height = "175cm";
person.introduce = function() {
    console.log("Hello...NIGGA")
};


console.log(person)