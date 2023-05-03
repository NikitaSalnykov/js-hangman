const hangmanGame = document.querySelector('.hangman-article')
const overlayImg = hangmanGame.querySelector('.overlay-image')

window.addEventListener('keydown', onWrongKey)

let defaultPosition = -165

function onWrongKey(event) {
  if (event.code === 'KeyS') {
    if (defaultPosition < 75) {
      console.log('sosi');

      defaultPosition -= -20
    
      overlayImg.style.top = `${defaultPosition}px`
      console.log(defaultPosition);
    } else {
      defaultPosition = -165
      overlayImg.style.top = `${defaultPosition}px`
    }
  }
}