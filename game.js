const start_btn = document.querySelector('.start_btn')
const clock = document.querySelector('.clock')
const square = [...document.querySelectorAll('.square')]
const life = document.querySelector('.life')
const end = document.querySelector('.end')
const score = document.querySelector('.score')
let scores = 0;

let timeGame = 60
let life3 = 3
life.innerHTML = life3

let result = 0;

console.log(square)



const clockFn = () => {
    
    clock.innerHTML = timeGame

 

    const countingFn = () => {
        timeGame--
        clock.innerHTML = timeGame

        if(timeGame == 0 || life3 === 0) {
            timeGame = 0;
            end.innerHTML = 'the game is end '
            clearInterval(counting)
        }
      
    }

    let counting = setInterval(countingFn, 1000)
 
}

const randomSquare = () => {

   

    if(timeGame === 0 || life3 === 0 ) {
        return

    }else {
        
    setTimeout( () => {

        let randomNumber = Math.floor(Math.random() * 25)
        const squareArr = square
        let clicked = false
    
        squareArr[randomNumber].classList.add('green')
        squareArr[randomNumber].addEventListener('click', clickF = () => {
            clicked = true
            scores++
            score.innerHTML = scores
            result++
            squareArr[randomNumber].classList.remove('green')
        })


        setTimeout( () => {
            if(!clicked) {
                life3--
                life.innerHTML = life3
               
            }
            squareArr[randomNumber].classList.remove('green')
            squareArr[randomNumber].removeEventListener('click', clickF)

            randomSquare()
        },1000)
       
        
    }, 1500)
    }
  

}

const startGame = () => {

    start_btn.disabled = true
    clockFn()
    randomSquare()
}



start_btn.addEventListener('click', startGame)