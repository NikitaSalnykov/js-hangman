const hangmanGame = document.querySelector('.hangman-article')
const overlayImg = hangmanGame.querySelector('.overlay-image')
const answer = hangmanGame.querySelector('.answer-text')
const scoreLine = hangmanGame.querySelector('.text-score')
const scoreInfo = hangmanGame.querySelector('.text-score-info')

const words = ["TheFool", "TheMagician", "TheEmpress", "TheEmperor", "TheLovers", "TheChariot", "Strength", "TheHermit", "Justice", "Death", "TheDevil", "TheTower", "TheStar", "TheMoon", "TheSun", "Judgment", "TheWorld", "AceofWands", "TwoofWands", "ThreeofWands", "FourofWands", "FiveofWands", "SixofWands", "SevenofWands", "EightofWands", "NineofWands", "TenofWands", "PageofWands", "KnightofWands", "QueenofWands", "KingofWands", "AceofCups", "TwoofCups", "ThreeofCups", "FourofCups", "FiveofCups", "SixofCups", "SevenofCups", "EightofCups", "NineofCups", "TenofCups", "PageofCups", "KnightofCups", "QueenofCups", "KingofCups", "AceofSwords", "TwoofSwords", "ThreeofSwords", "FourofSwords", "FiveofSwords", "SixofSwords", "SevenofSwords", "EightofSwords", "NineofSwords", "TenofSwords", "PageofSwords", "KnightofSwords", "QueenofSwords", "KingofSwords", "AceofPentacles", "TwoofPentacles", "ThreeofPentacles", "FourofPentacles", "FiveofPentacles", "SixofPentacles", "SevenofPentacles", "EightofPentacles", "NineofPentacles", "TenofPentacles", "PageofPentacles", "KnightofPentacles", "QueenofPentacles", "KingofPentacles"]
let word = ''
let score = 0

function randomWord(words) {
  word = words[Math.floor(Math.random() * words.length)].split('');

  if (word.length > 10) {
    answer.style.letterSpacing = '5px';
    answer.style.fontSize = '25px';
  } else {
    answer.style.letterSpacing = '12px';
    answer.style.fontSize = '30px';
  }
}

randomWord(words)

let reservedSpace = "" 
  
const reserv = wordsArray => {
  
  for (let i = 0; i < wordsArray.length; i += 1) {
    reservedSpace += "_"
  }
  return answer.textContent = reservedSpace
}

reserv(word)



// window.addEventListener('keydown', onWrongKey)
window.addEventListener('keydown', onGoodKey)

let defaultPosition = 42

// function onWrongKey(event) {
//   if (event.code === 'KeyS') {
//     if (defaultPosition < 75) {
//       defaultPosition -= -20
    
//       overlayImg.style.top = `${defaultPosition}px`
//       console.log(defaultPosition);
//     } else {
//       defaultPosition = -165
//       overlayImg.style.top = `${defaultPosition}px`
//     }
//   }
// }




function onGoodKey(event) {
  const latterKey = word.map((item) => `Key${item.toUpperCase()}`)
  let hiddenLatter = answer.textContent.split('')

  if (latterKey.includes(event.code)) {
    for (let i = 0; i < word.length; i += 1){
      if (`Key${word[i].toUpperCase()}` === event.code)
        hiddenLatter.splice(i, 1, word[i])
    }
    scoreInfo.textContent = `Good`
    scoreInfo.style.color = `rgb(${(Math.floor(Math.random() * 164))},${155 + (Math.floor(Math.random() * 100))},${(Math.floor(Math.random() * 111))})`
    answer.textContent = hiddenLatter.join('');
  } else {

    if (defaultPosition < 300) {
      score -= 15
      scoreInfo.style.color = `rgb(${155+(Math.floor(Math.random() * 100))},${(Math.floor(Math.random() * 164))},0)`
      scoreInfo.textContent = 'Fail -15'
      defaultPosition += 33
      overlayImg.style.top = `${defaultPosition}px`
    } else {
      score -= 10 * word.length
      scoreInfo.textContent = `Epic fail -${10 * word.length}`
      scoreInfo.style.color = `rgb(${155+(Math.floor(Math.random() * 100))},${(Math.floor(Math.random() * 164))},0)`
      console.log(score);
      window.removeEventListener('keydown', onGoodKey)
      setTimeout(playAgain('Loose'), 1000);
      window.addEventListener('keydown', onKeyY) 
      
    }
  }

  if (word.join('') === answer.textContent) {
    score += 40 * word.length
    scoreInfo.textContent = `Perfect +${30 * word.length}`
    scoreInfo.style.color = `rgb(${(Math.floor(Math.random() * 164))},${155 + (Math.floor(Math.random() * 100))},0))})`
    console.log(score);
    window.removeEventListener('keydown', onGoodKey)
    playAgain('Win')
    window.addEventListener('keydown', onKeyY) 
  }
  
  scoreLine.textContent = `Your score: ${score}`
}
  

function restart() {
  window.addEventListener('keydown', onGoodKey)
      defaultPosition = 44
      overlayImg.style.top = `${defaultPosition}px`
      word = ''
      reservedSpace = ""
      if (word === '' && reservedSpace === "")
      randomWord(words)
      reserv(word)
}

function playAgain(phrase) {
  answer.textContent = `${phrase}! Play againe? [Y/N]` 
  answer.style.letterSpacing = 0;
}

function onKeyY(event) {
  if (event.code === 'KeyY') {
    restart();
    window.removeEventListener('keydown', onKeyY)
    // answer.style.letterSpacing = '12px';
    scoreInfo.textContent = ''
  }
} 



// для открытия клавиатуры на мобильном без инпута
window.onload = function() {
  var body = document.getElementsByTagName("body")[0];
  body.addEventListener("touchstart", function() {}, false);
};