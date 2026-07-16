const heartsContainer = document.querySelector(".hearts");

let score = 0;
let target = 20;

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.onclick = function () {
        score++;
        document.getElementById("score").innerText = score;

        heart.remove();

        if (score >= target) {
            unlockLetter();
        }
    };

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

function unlockLetter() {

    document.getElementById("message").style.display = "block";

    launchConfetti();
}

function launchConfetti() {

    for(let i=0;i<150;i++){

        const confetti=document.createElement("div");

        confetti.innerHTML="💖";

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.fontSize=(10+Math.random()*25)+"px";

        confetti.style.transition="4s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.style.top="110vh";

            confetti.style.transform=`rotate(${Math.random()*720}deg)`;

        },100);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

const progress=document.getElementById("progress");

setInterval(()=>{

    let percent=(score/target)*100;

    progress.style.width=percent+"%";

},100);
