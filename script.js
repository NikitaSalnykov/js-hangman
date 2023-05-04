const hangmanGame = document.querySelector('.hangman-article')
const overlayImg = hangmanGame.querySelector('.overlay-image')
const answer = hangmanGame.querySelector('.answer-text')

const words = ['nikita']
const word = words[Math.floor(Math.random() * words.length)].split('');

const reserv = wordsArray => {
  let reservedSpace = "" 
  for (let i = 0; i < wordsArray.length; i += 1) {
    reservedSpace += "_"
  }
  return answer.textContent = reservedSpace
}

reserv(word)



window.addEventListener('keydown', onWrongKey)
window.addEventListener('keydown', onGoodKey)

let defaultPosition = -165

function onWrongKey(event) {
  if (event.code === 'KeyS') {
    if (defaultPosition < 75) {
      defaultPosition -= -20
    
      overlayImg.style.top = `${defaultPosition}px`
      console.log(defaultPosition);
    } else {
      defaultPosition = -165
      overlayImg.style.top = `${defaultPosition}px`
    }
  }
}


function onGoodKey(event) {
  const latterKey = word.map((item) => `Key${item.toUpperCase()}`)
  if (latterKey.includes(event.code)) {
    for (let i = 0; i < word.length; i+=1){
      answer.textContent.split('')[i] = word[i]
    }
  }
}