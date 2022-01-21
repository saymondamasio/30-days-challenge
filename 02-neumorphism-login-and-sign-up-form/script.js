let switchContent = document.querySelector('#switch-content');
let switchSignIn = document.querySelector('#switch-sign-in');
let switchSignUp = document.querySelector('#switch-sign-up');
let switchCircles = document.querySelectorAll('.circle_bg');

let switchButton = document.querySelectorAll('.switch-btn')
let signUpContainer = document.querySelector('#sign-up')
let signInContainer = document.querySelector('#sign-in')
let submitButtons = document.querySelectorAll('.submit')

let getButtons = (e) => e.preventDefault()

let changeForm = () => {
    switchContent.classList.toggle('to-right')
    switchCircles[0].classList.toggle('to-right')
    switchCircles[1].classList.toggle('to-right')

    switchSignIn.classList.toggle('is-hidden')
    switchSignUp.classList.toggle('is-hidden')
    signUpContainer.classList.toggle('to-left')
    signInContainer.classList.toggle('to-left')
    signInContainer.classList.toggle('z-index-200')
}

let mainF = () => {
    submitButtons.forEach(btn => btn.addEventListener('click', getButtons))
    switchButton.forEach(btn => btn.addEventListener('click', changeForm))
}

window.addEventListener('load', mainF)