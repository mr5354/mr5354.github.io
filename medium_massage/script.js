const quotes = ['"Age of Anxiety"', "...the massage?", "you", "What's that buzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzing?", "your family", "Now all the world's a sage.", "your neighborhood", "You can't go home again.", "your education", "Mere instruction will not suffice.", "your job", '"Come into my parlor," said the computer to the specialist.', "your government", "Politics offers yesterday's answers to today's questions.", "The living room has become a voting booth.", '"the others"', "We have become irrevocably involved with, and responsible for, each other.", "there is absolutely no inevitability as long as there is a willingness to contemplate what is happening", "All media are extensions of some human faculty - psychic or physical.", "The wheel...is an extension of the foot", "the book is an extension of the eye...", "clothing, an extension of the skin...", "electric circuitry, an extension of the central nervous system", "Man was given an eye for an ear.", "c,o,n,t,i,n,u,o,u,s", "c-o-n-n-e-c-t-e-d", "Of painting SPEECH, and speaking to the eyes?", "How to embody, and to colour THOUGHT?", "Printing, a ditto device", '"Time" has ceased, "space" has vanished.', "Information pours upon us, instantaneously and continuously.", "Print technology created the public. Electric technology created the mass.", "The stars are so big, The Earth is so small, Stay as you are.", 'In the name of "progress," our official culture is striving to force the new media to do the work of the old.', "Environments are invisible. Their groundrules, pervasive structure, and overall patterns elude easy perception.", "Professionalism merges the individual into patterns of total environment.", "Education must shift from instruction, from imposing of stencils, to discovery - to probing and exploration and to the recognition of the language of forms.", "Our technology forces us to live mythically, but we continue to thing fragmentarily, and on single, separate planes.", "A ditto, ditto device."]
const quoteLibrary = document.getElementById("dark")
const lightSwitch = document.getElementById("lightbulb")
const centerOn = document.getElementById("hi")
const centerOff = document.getElementById("bye")
var onOff = 1

lightSwitch.addEventListener("click", showQuotes)


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandom(0, i + 1);
        [array[i], array[j]] = [array[j], array[i]]
    }
}

function showQuotes() {
    if (onOff == 1) { //when light is on
        shuffleArray(quotes)
        for (let i = 0; i < quotes.length / 2; i++) {
            var x = document.createElement("p")
            var y = document.createTextNode(quotes[i])
            x.appendChild(y)

            x.style.fontSize = getRandom(2, 4) + "vmin"
            var randomTop = getRandom(0, 90)
            var randomLeft = getRandom(0, 100)
            x.style.top = randomTop + "vh"
            x.style.left = randomLeft + "vw"

            quoteLibrary.appendChild(x)
            x.style.display = "none"
            typeWriterDelay(x)
        }
        document.body.style.backgroundColor = "black"
        lightSwitch.src = "assets/light_off.png"
        centerOn.style.display = "none"
        centerOff.style.display = "block"
        onOff = 0
        console.log(onOff)
    } else {
        quoteLibrary.replaceChildren()
        document.body.style.backgroundColor = "rgb(255, 231, 200)"
        lightSwitch.src = "assets/light_on.png"
        centerOn.style.display = "block"
        centerOff.style.display = "none"
        onOff = 1
        console.log(onOff)
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function typeWriter(el) {
    const words = el.innerHTML.split('')
    const randomTimer = getRandom(15, 120);
    el.innerHTML = ''
    el.style.display = 'block'
    words.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), randomTimer * i)
    )
}

function typeWriterDelay(x) {
    const randomDelay = getRandom(0, 7000)
    setTimeout(() => (typeWriter(x)), randomDelay)
}