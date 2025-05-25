//condition in js
//argument ra parameter


// const temp =29;
// const api = fetch("https://dummyjson.com/users")
// if(temp<29 && temp>20){
//     console.log("hot")
// }
// else if(temp>30){
//  console.log("very hot")
// }
// else {
//     console.log("khassai garmi ta xaina")
// }
// if (temp>20){
//     console.log("hot")
//     return
// }
// console.log("khassai garmi xaina")

// if(isUser){
//      console.log("loging in...")
// }
// else{
//     console.log("sorry!!! you are not user...")
// }
//  const response= temp>30?"thik xaina":"fan off"
//  console.log(response)
 //short circuit 
//  const sandesh = isUser && 
//  "login in...." || "optional "
//  console.log(sandesh) //....most imp
// const email = isUser && "sandeshacharyahamal@gmail.com"

//nullish coelescing
// let age =20;
// let result = age?? "no-user"

// console.log(result)

//function
// console.log(1+1)
// console.log(5+7)

//types ->4
//regural function
//named function
//arrow function->most used
//anonymous



//regural function
// function add(){
//  console.log(1+1)
// }
// add()

// function add (a,b,c=20){
//     console.log(a+b+c)
// }
// add(10,20)

//named function
// const add = function (a,b,c){
//     console.log(a+b+c)
// }
// add(10,20,30)
// let add = (a,b,c) =>console.log(a+b+c)
// add(1,2,3)
//anonymous
// (()=>{
//     console.log("i am hacker")
// })()
// const anonymous =()=>{
//     console.log("i am hacker")
// }

// anonymous()


// const square = (a)=> 
//     {
//         return a*a
//     }
 
//  const result =square(5);
//  console.log(result)

//loops in js
// const users = ['sandesh','samir','rajesh',"abc","bcd","ipo","jhuih","uhsih","jijij","sandesh"]
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
//for
// let i;    //++i->i+1;
// for(var i=0;i<users.length;i++){
//     console.log(users[i])
// }
// while
// let users=['samir','don','honita']
// var i=0;
// while(i<3)
// {
//     console.log(users[i]);
//     i++;
// }
// do while
// do{
//  console.log(users[i]);
//     i++;
// }while(i<3)
//for of->array ma matra milxa
// const users = ['sandesh','samir','rajesh',"abc","bcd","ipo","jhuih","uhsih","jijij","sandesh"]
// for (name of users){
//     console.log(i)
// }
//for in ->object and array both 
//  const users ={
//     name:"digital gurukul",
//     address:"dharan"
//  }
//  for (haha in users){
//     console.log(user[haha])
// }

//hoisting->variable ra function top ma name tara teo define gareykai xaina 
// console.log(name)
// var name ="rajesh" //hoisting var ma matra kaam garxa
// var name ="ram"
//  add()
//  function add(){
//     console.log(1+1)
//  }

// let add = function(){
//     console.log(1+2)
// }
// endClass()
// function endClass(){
//     console.log("la tata bye bye aja lai")
    
// }

let person ={
    name:"haribahadur",
    age:20,
    faculty:"BCT"
}

// let age = person.age;
// let facult = person.faculty,
let {name,age,faculty}= person

console.log(name,age,faculty)






 