document.addEventListener('DOMContentLoaded', ()=>{

    //card options
    const cardArray = [
        {
            name: 'cat',
            img: 'imgs/Cat.png'
        },
        {
            name: 'cat',
            img: 'imgs/Cat.png'
        },
        {
            name: 'dog',
            img: 'imgs/Dog.png'
        },
        {
            name: 'dog',
            img: 'imgs/Dog.png'
        },
        {
            name: 'panda',
            img: 'imgs/Panda.png'
        },
        {
            name: 'panda',
            img: 'imgs/Panda.png'
        },
        {
            name: 'duck',
            img: 'imgs/Duck.png'
        },
        {
            name: 'duck',
            img: 'imgs/Duck.png'
        },
        {
            name: 'lion',
            img: 'imgs/Lion.png'
        },
        {
            name: 'lion',
            img: 'imgs/Lion.png'
        },
        {
            name: 'rhyno',
            img: 'imgs/Rhyno.png'
        },
        {
            name: 'rhyno',
            img: 'imgs/Rhyno.png'
        },
        {
            name: 'turtle',
            img: 'imgs/Turtle.png'
        },
        {
            name: 'turtle',
            img: 'imgs/Turtle.png'
        },
        {
            name: 'gorilla',
            img: 'imgs/Gorilla.png'
        },
        {
            name: 'gorilla',
            img: 'imgs/Gorilla.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/Blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imgs/Blank.png')
        cards[optionTwoId].setAttribute('src', 'imgs/Blank.png')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'imgs/White.png')
        cards[optionTwoId].setAttribute('src', 'imgs/White.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'imgs/Blank.png')
        cards[optionTwoId].setAttribute('src', 'imgs/Blank.png')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
    













})