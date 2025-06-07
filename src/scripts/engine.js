const emojis = [
    "❤️",
    "❤️",
    "🧡",
    "🧡",
    "💛",
    "💛",
    "💚",
    "💚",
    "💙",
    "💙",
    "💜",
    "💜",
    "🩷",
    "🩷",
    "🤎",
    "🤎",

]

let openCard = []
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if(openCard.length < 2){
        this.classList.add("boxOpen");
        openCard.push(this)
    }
    if(openCard.length == 2){
        setTimeout(checkMatch, 500)
    }
}
function checkMatch(){
    if(openCard[0].innerHTML === openCard[1].innerHTML){
        openCard[0].classList.add("boxMatch")
        openCard[1].classList.add("boxMatch")
    }else{
        openCard[0].classList.remove("boxOpen")
        openCard[1].classList.remove("boxOpen")
    }
    openCard = []
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        mostrarModal()
    }
}
function mostrarModal() {
  document.getElementById('meuModal').style.display = 'flex';
}
document.getElementById('fechar').onclick = () => {
  document.getElementById('meuModal').style.display = 'none';
  window.location.reload()
  
};

function playMusic(){
    let audio = new Audio('./src/sounds/audio.wav')
    audio.volume = 0.1;
    audio.loop = true
    audio.play()
}
playMusic()