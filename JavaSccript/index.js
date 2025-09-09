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

// let arr=[2,1,3,"hello","hi",true,false]
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

// for(let i =1 ;i<5;i++){
//     setTimeout(()=>{
//      console.log(i)
//     },1000*i)
// }

// 3 Sep

// window is a global object for js
// console.log(window)


// this keyword

// let obj={
//     id:1,
//     name:"hello",
//     sum:function(){
//         console.log(this)
//     }
// }
// obj.sum()

// this always points window
// a=5
// console.log(this.a)

// a=5
// let obj={
//     a:10,
//     id:1,
//     name:"hello",
//     sum:()=>{
//         console.log(this.a)
//     },
//     // arrow function always refer parent of parent
//     sum1:function(){
//         console.log(this.a)
//     }
// }
// obj.sum()
// obj.sum1()

// protoype is the only hidden data type which the hidden properties of different data types used in program
//let arr=[1,2,3,4]
// console.log(Array.prototype)
// console.log(arr.toString())

// arr.map((a,b,c)=>{
//     console.log(b)
// })

// Array.prototype.myMap=function(callback){
//     let res=[]
//     for(let i=0;i<this.length;i++){
//         res.push(callback(this[i],i,this))
//     }
//     return res
// }
// let data=arr.myMap((a,b,c)=>{
//    return c
// })
// console.log(data)

// arr.myMap((a,b,c)=>{
//     console.log(a)
// })

// let arr=[1,2,3,4,5]
// Array.prototype.myfilter=function(cb){
//     let res=[]
// for(let i=0;i<this.length;i++){
//     if(cb(this[i],i,this)){
//         res.push(this[i])
//     }
// }
// return res
// }

// let data=arr.myfilter((a,b,c)=>{
//     return a%2==0
// })
// console.log(data)


// function step1(fn){
//     setTimeout(()=>{
//         console.log("photo got selected")
//         fn()
//     },5000)
    
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log("filter")
//         fn()
//     },4000)
    
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log("caption")
//         fn()
//     },3000)
    
// }

// function step4(){
//     setTimeout(()=>{
//         console.log("post")
//     },1000)
// }

// // step1()
// // step2()
// // step3()
// // step4()

// // when the function is passed as an argument  of  function then it is called callback function.
// step1( ()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

// 8 Sep
// in js we use promise to perform asynhronous task
// let promise = new Promise((res,rej)=>{
//     res()
//     //rej()
//     // let a= true
//     // if(a){
//     //     res()
//     // }else{
//     //     rej()
//     // }
// })
//console.log(promise,"hehe")

// .then and .catch are functions that runs when a promise is resolved or rejected``
// promise.then(()=>{
//     console.log("done")
// }).catch(()=>{
//     console.log("err")
// })

// let step1 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//             console.log("Photo got selected")
//         },4000)
//     })
// }

// let step2 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res()
//             console.log("Caption")
//         },2000)
//     })
// }

// step1().then(()=>{
//     step2().then(()=>{

//     })
// })

// async - await is used in place of .then and .catch . they can't be separately used.
// async keyword is used to make the part of code or func asynchronous which means that we can run our code accordingly

// async function call() {
//     await step1()
//     await step2()
// }
// call()