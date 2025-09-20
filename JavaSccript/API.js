// 17Sep
// let ul= document.querySelector("ul")
// fetch("https://jsonplaceholder.typicode.com/todos").
// then((data)=>{
//     // console.log(data);
//     return data.json()
// }).then((res)=>{
//     console.log(res);
//     show(res)
// })


// function show(res){

//     for(let i of res){
//         let li= document.createElement("li")
//         let h4= document.createElement("h4")

//         li.innerText= i.id
//         h4.innerText= i.title
//         ul.append(li,h4)
//     }
// }

// 18Sep

let btn= document.querySelector("button")
let inp= document.querySelector("input")
btn.addEventListener("click",()=>{
    let searchText = inp.value

fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).
then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res);
    show(res)
    
})

})

function show(res){
    let img= document.querySelector("img")
    let link= res[0].show.image.medium
    img.setAttribute("src",link)
}