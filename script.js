// ======================================
// BIRTHDAY WEBSITE JAVASCRIPT
// ======================================


// ======================================
// PASSWORD LOCK
// ======================================

const SECRET = "2110";

let entered = "";


function makeDots() {

    const dots =
        document.getElementById("dots");

    if (!dots) return;


    dots.innerHTML = "";


    for (let i = 0; i < SECRET.length; i++) {

        const dot =
            document.createElement("span");


        dot.className =
            "dot" +
            (i < entered.length ? " filled" : "");


        dots.appendChild(dot);
    }
}



function press(number) {

    if (entered.length >= SECRET.length) {
        return;
    }


    entered += number;


    makeDots();


    if (entered.length === SECRET.length) {

        setTimeout(checkCode, 150);

    }

}



function clearCode() {

    entered = "";


    const message =
        document.getElementById("code-msg");


    if (message) {

        message.textContent = "";

    }


    makeDots();

}



function checkCode() {

    const message =
        document.getElementById("code-msg");


    if (!message) return;


    if (entered === SECRET) {

        message.textContent =
            "Unlocked. 🙄💗";


        setTimeout(() => {

            showSection("question");

        }, 700);

    }

    else {

        message.textContent =
            "Wrong code. Try again. 🙄";


        entered = "";


        setTimeout(() => {

            makeDots();

        }, 300);

    }

}



// ======================================
// SECTION CONTROL
// ======================================

function showSection(id) {

    const sections =
        document.querySelectorAll("section");


    sections.forEach(section => {

        section.classList.add("hidden");

    });


    const target =
        document.getElementById(id);


    if (!target) return;


    target.classList.remove("hidden");


    document.documentElement.style.overflowY =
        "auto";


    document.body.style.overflowY =
        "auto";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// ======================================
// GO TO SECTION
// ======================================

function goTo(id) {

    const target =
        document.getElementById(id);


    if (!target) return;


    target.classList.remove("hidden");


    target.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



// ======================================
// NO BUTTON
// ======================================

function moveNo() {

    const button =
        document.getElementById("noBtn");


    const area =
        document.querySelector(".choice-area");


    if (!button || !area) return;


    const maxX =
        Math.max(

            0,

            area.clientWidth -
            button.offsetWidth

        );


    const maxY =
        Math.max(

            0,

            area.clientHeight -
            button.offsetHeight

        );


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";


    button.style.transform =
        "none";

}



// ======================================
// CAKE + CANDLES
// ======================================

let candles = 5;


function blow(candle) {

    if (!candle) return;


    if (candle.classList.contains("off")) {
        return;
    }


    candle.classList.add("off");


    candles--;


    const message =
        document.getElementById("candleMsg");


    if (!message) return;


    if (candles > 0) {

        message.textContent =
            `${candles} candles glowing ✨`;

    }

    else {

        message.textContent =
            "Wish made. Happy Birthdayyy! 🎂💗";


        confetti();

        confetti();

    }


    confetti();

}



// ======================================
// CONFETTI
// ======================================

function confetti() {

    const characters = [

        "▪",
        "◆",
        "✦",
        "●",
        "■"

    ];


    const colors = [

        "#f28db4",
        "#d39be9",
        "#f6b5c9",
        "#c39ee7",
        "#ee7da9"

    ];


    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.textContent =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            (8 + Math.random() * 9) + "px";


        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        piece.style.color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 3500);

    }

}



// ======================================
// BALLOONS
// ======================================

let balloons = 7;


function popBalloon(balloon) {

    if (!balloon) return;


    if (balloon.classList.contains("popped")) {
        return;
    }


    balloon.classList.add("popped");


    balloons--;


    const counter =
        document.getElementById(
            "balloonCount"
        );


    if (!counter) return;


    if (balloons > 0) {

        counter.textContent =
            `${balloons} balloons left`;

    }

    else {

        counter.textContent =
            "You popped them all! 🎉";


        confetti();

        confetti();

    }

}



// ======================================
// ENVELOPE
// ======================================

function openLetter(envelope) {

    if (!envelope) return;


    if (envelope.classList.contains("open")) {
        return;
    }


    envelope.classList.add("open");


    const hint =
        document.getElementById(
            "letterHint"
        );


    if (hint) {

        hint.textContent =
            "Okay, there you go. 💗";

    }

}



// ======================================
// GIFT
// ======================================

function openGift() {

    const gift =
        document.getElementById("giftBox");


    const message =
        document.getElementById(
            "giftMessage"
        );


    if (!gift || !message) {
        return;
    }


    if (gift.classList.contains("rotate")) {
        return;
    }


    gift.classList.add("rotate");


    setTimeout(() => {

        message.classList.remove(
            "hidden"
        );


        confetti();

        confetti();

    }, 900);

}



// ======================================
// INITIAL PAGE STATE
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        document.documentElement.style.overflowY =
            "hidden";


        document.body.style.overflowY =
            "hidden";


        makeDots();

    }
);