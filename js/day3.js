//HOF->higher order function 
//callback

// forEach-> array -> array //loop...
//map -> dataset -->return array

//filter->boolean ---> 
//reduce->

//callback

// function hello(name,bye){
//     console.log(name)
//     bye()
// }
//  function bye(){
//     console.log("Bye")
//  }

//  hello("hello",bye)  

//ForEach
// const users = ["sameer","sandesh","Rajesh"]
// users.forEach(
//     function(user){
//      console.log(user)
//     }
// )
// const nums = [1,2,3,4,5]
// const square = []       a(b())
// nums.forEach(function(num){
//     square.push(num**2)
// })
// // console.log(square)
// const squareNum=nums.map(function(num){
//     return num**2
// })
// console.log(squareNum)

// const users =[
//     {
//         id:1,
//         fName:"sameer",
//         lName:"sapkota",
//         address:"butwal",
        
//     },{
//          id:2,
//         fName:"sandesh",
//         lName:"acharya",
//         address:"bardiya"
//     },
//     {
//         id:3,
//         fName:"rajesh",
//         lName:"pandey",
//         address:"nuwakot"
//     }
  
// ]
//  const arr=[1,2,3]
//  const[n1,n2,n3] =arr
//  console.log(n1,n2,n3)

//   users.forEach((user)=>{
//         console.log(user.fName + user.lName)
//     })
// const response = users.map((user)=>{
//     return{
//         ...user, ->spread operator
//         name:user.fName + user.lName
//     }
// })

// console.log(response)
// console.log(users)

// const numbers = [1,2,3,4,5]
// [{
//     number:1,
//     name:"digitalgurukul"
// },
// ]
// const result = numbers.map((number)=>{
//     return {
//         number:number,
//         name:"digitalgurukul"
//     }
// })
// console.log(result)

// const products = [

//     {   id=
//         productName:"",
//         price:200
//     }
// ]

//filter
// const nums = [0,1,2,3,4,5,6,7,8,9,10]
// const even = nums.filter((haha)=>{
//     return haha%2 ==0     //boolean matra return garxa
// })

// console.log(even)
// console.log(nums)
//  const books = [
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2025
//     },
//     {
//         title:"kulman",
//         caption:"something",
//         year:2012
//     },
//     {
//         title:"Geeta",
//         caption:"something",
//         year:2015
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2020
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2022
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2009
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2011
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2023
//     },
//     {
//         title:"Bagwat Geeta",
//         caption:"something",
//         year:2024
//     },

//  ]

//  const res =  books.filter(function(book){
//     return book.title = "Bagwat geeta"
//  })
//  console.log(res)
// const files = ["app.js",".html","day1.js"]
//  file.endWith('.js')
// const data = [10,null,0,"Manbahadur",undefined,null]
// const output = data.filter((item)=>{
//     return item!==null && item!==undefined && item!="Manbahadur"
// })
// console.log(output)
//reduce
// const numbers = [1,2,3,4,5,200,300,40404,4004,499,40099,40940,4809]  
// const result =numbers.reduce(function(accumulator,currentValue){
//  return accumulator+currentValue
// },0)
// console.log(result)

// const carts =[ //0,0
//     {
//         name:"product1",
//         quantity:400,
//         price:900
//     },
//     {
//         name:"product2",
//         quantity:499,
//         price:799,
//     },
//     {
//         name:"product3",
//         quantity:299,
//         price:399,
//     },
// ]
// const result =carts.reduce(function(accumulator,currenProduct){
// accumulator.totalPrice += (currenProduct.quantity * currenProduct.price)
// accumulator.totalQuantity += currenProduct.quantity
// return accumulator
// },{totalPrice:0, totalQuantity:0})
// console.log(result)

// const people = [
//     {
//         name:"something",
//         age:20
//     },
//     {
//         name:"some",
//         age:22
//     },
//     {
//         name:"thing",
//         age:21
//     },
//     {
//         name:"sompthing",
//         age:20
//     },
//     {
//         name:"okey",
//         age:20
//     }
// ]
// const groupData = people.reduce(function(accumulator,person){
//     const age = person.age
//     if(!accumulator[age]){
//         accumulator[age] =[]
//     }
//     accumulator[age].push(person)
//     return accumulator
// },{})
// console.log(groupData)
