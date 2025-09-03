// // day1
// var a=10
// var a=15
// console.log(a)

// let b=10
// b=3
// console.log(b)

// const c=2
// console.log(c)
// // the constant variable can't be changed or reassigned

// console.log(5=='5')
// // compares only the values given not the data type

// console.log(s=true)
// //assignment

// console.log(5==='5')
// // compares the data type too

// console.log({}=={})

// // undefied
// var a=null

// // null
// //var a=

// let d=100
// let to=d==14 
// console.log(d)

// let userName="Om"
// let lastName="Tiwari"
// console.log(`${userName}   ${lastName}`)

// let e=true
// if(0){
//     console.log("hello")
// }else{
//     console.log("hi")
// }

// // ternary operator
// let f=false
// f ? console.log("hii") : console.log("byee")


// 28Aug

// let arr=[1,2,3,4,5]
// let sum = arr.reduce((a,b,c,d)=>{
//     return a+b;
// },10)
// console.log(sum)

// let arr=[1,2,3,4,5,64,3,5,2,5,2,32]

// let data = arr.filter((a,b,c,d)=>{
//     return a>2
// })
// console.log(data)

// let s = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(s)

// let obj = {
//     id:1, 
//     name:"ram",
//     sum:function(){
//         console.log("hello")
//     }
// }

// console.log(obj.id)
// console.log(obj.name)
// obj.sum
// console.log(obj.id)

// 1 sep

// const a=5
// a=()=>{
//     console.log("helloo")
// }

// let b=5
// b=()=>{
//      console.log("hii")
// }

// var c=6
// c=()=>{
//      console.log("hiiiii")
// }

// let a=5
//    function sum(){
//     a+=5
//     return a
//    }
//     console.log(sum())
//     console.log(sum())

// {
//      console.log(10)
// }

// {
//     let a=15
//      console.log(a)
// }
//  console.log(a)

// let and const can't be accesed outside the block{} . block scope
// var can be accesed outside the block . functional scope i.e. can't be accessed outside the function

// {
//     var b=20
// } console.log(b)

// function sum(){
//     var c=10
// }
//  console.log(c)

// Array

// var arr=[1,2,3,4,5] //declaration
// arr.push(11) // add the element at the last
// arr.pop() // removes the element from last
// arr.unshift(101) // adds the element in the first position
// arr.shift() // removes the element from firt position
//  console.log(arr)

// HOF - higher order function
// a function that only returns a function.

// function outer(){
//     function inner(){
//          console.log("inner")
//     }
//     return inner
// }
// outer()
// let a=outer()
// a()

// function outer(a){
//     a()
// }
// function inner(){
//      console.log("inner")
// }
// outer(inner)

//  console.log( typeof(typeof(true)) )

// let arr=[2,"hello",true]
// for(let i=0;i<arr.length;i++){
//      console.log(arr[i],typeof(arr[i]))
// }

// 2 Sep

let arr=[2,1,3,"hello","hi",true,false]
// function getStr(arr){
//      let res =[]
//      for(let i of arr){
//           if(typeof i == "string"){
//                res.push(i)
//           }
//      }
//      return res
// }
// console.log(getStr(arr))

// function getNum(arr){
//      let res =[]
//      for(let i of arr){
//           if(typeof i == "string"){
//                res.push(i)
//           }
//      }
//      return res
// }
// console.log(getNum(arr))

// function getStr(i){
//      return typeof i == "string"
// }

// function getNum(i){
//      return typeof i == "number"
// }

// function getBool(i){
//      return typeof i == "boolean"
// }

// function getFunc(arr,fn){

//      let res=[]
//      for(let i of arr){
//           if(fn(i)){
//                res.push(i)
//           }
//      }
//      return res
// }
// console.log(getFunc(arr,getStr))
// console.log(getFunc(arr,getNum))
// console.log(getFunc(arr,getBool))

// setTimeout(()=>{
//      console.log("hi")
// },1000)

// setInterval(()=>{
//      console.log("hiii")
// },1000)

for(let i =1 ;i<5;i++){
    setTimeout(()=>{
     console.log(i)
    },1000*i)
}