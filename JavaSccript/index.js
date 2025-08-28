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

let arr=[1,2,3,4,5,64,3,5,2,5,2,32]

let data = arr.filter((a,b,c,d)=>{
    return a>2
})
console.log(data)

let s = arr.sort((a,b)=>{
    return a-b
})
console.log(s)

let obj = {
    id:1, 
    name:"ram",
    sum:function(){
        console.log("hello")
    }
}

console.log(obj.id)
console.log(obj.name)
obj.sum
console.log(obj.id)

