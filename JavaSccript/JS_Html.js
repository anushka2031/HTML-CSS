// console.log(document)

// let h1= document.getElementById("one")
// console.log(h1)
// h1.style.color="red"

// let h1= document.getElementsByClassName("two")
// console.log(h1)
// h1[0].style.color="red"

// let h1= document.querySelectorAll(".two")
// console.log(h1)

// let h1= document.querySelectorAll("#one")
// console.log(h1)

// for(let i of h1){
//     h1[i].style.color='red'
//     console.log(h1[i])
// }

// let h1= document.querySelectorAll("#one")
// h1.innerText="hii"
// console.log(h1.innerText)

// let a= document.querySelector("a")
// a.setAttribute("href","https://flipkart.com")
// console.log()

// let arr =["https://images.unsplash.com/photo-1754851348758-564daaf750e4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , "https://images.unsplash.com/photo-1755398104024-fafdf0acb0f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzN8fHxlbnwwfHx8fHw%3D" , "https://images.unsplash.com/photo-1753454116069-a4fba9e75e4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzl8fHxlbnwwfHx8fHw%3D" , "https://images.unsplash.com/photo-1757137910091-1cf071030691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D"]

// const images= document.querySelector("img")
// let i=0;
// setInterval(function(){
//     images.setAttribute("src",arr[i])
//     i= (i+1)%arr.length
//     //i=i+1

// },2000)

let body= document.querySelector("body")
function func(){
    //console.log("hello")
    body.style.backgroundColor="blue"
}