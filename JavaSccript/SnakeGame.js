let canvas = document.querySelector('canvas')
let pen = canvas.getContext("2d")


// pen.fillRect(50,150,50,50)
// pen.clearRect(50,140,50,50)

let snakecell = [[0,0]]
let cell = 50
let direction = "right"
let gameover = false
let score = 0
let random = generateRandomcell()

let id = setInterval(()=>{
    draw()
    update()
},200)

document.addEventListener("keydown",(e)=>{

    if(e.key=="ArrowUp"){
        direction = 'up'
    }else if(e.key == 'ArrowDown'){
        direction= 'down'
    }else if(e.key == 'ArrowLeft'){
        direction= 'left'
    }else{
        direction= 'right'
    }

})

function draw(){

    if(gameover==true){
        clearInterval(id)

        pen.font = '40px sans-serif'
        pen.fillText('Game Over',50,150)

        return
    }

    pen.clearRect(0,0,1500,700)

    for(let i of snakecell){
       
        pen.fillStyle="green"
        pen.fillRect(i[0],i[1],cell,cell)
    }

     pen.font = '40px sans-serif'
     pen.fillText(`${score}`,150,50)
     pen.fillStyle = "brown"
     pen.fillRect(random[0],random[1],cell,cell)
}


function update(){
    
    let headX= snakecell[snakecell.length-1][0]
    let headY= snakecell[snakecell.length-1][1]

    let newX
    let newY

    if(direction == 'right'){
        newX = headX + cell
        newY = headY

        if(newX == 1500){
            gameover = true
        }
    }else if(direction == "left"){
        newX = headX-cell
        newY = headY

        if(newX<0){
            gameover = true
        }

    }else if(direction=='up'){
        newX=headX
        newY=headY-cell

        if(newY<0){
            gameover = true
        }
    }else{
        newX=headX
        newY= headY+cell

        if(newY==700){
            gameover=true
        }
    }

    snakecell.push([newX,newY])

    if(newX == random[0] && newY == random[1]){
        random=generateRandomcell()
        score+=1
    }else{
        snakecell.shift()
    }
}

function generateRandomcell(){
    return[
        Math.round((Math.random()*(1450))/cell)*cell,
        Math.round((Math.random()*(650))/cell)*cell
    ]
}

console.log(generateRandomcell());
