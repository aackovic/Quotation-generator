document.addEventListener("DOMContentLoaded",function(){
    let firstPart = [
        "The thing that ",
        "The pursuit ",
        "Put your whole self ",
        "Every moment ",
        "The good neighbor looks "
    ];
    let secondPart = [
        "I'm always left with ",
        "of happiness ",
        "into it ",
        "is a golden one for him ",
        "beyond the external accidents "
    ];
    let thirdPart = [
        "is this overwhelming desire ",
        "is a most ridiculous phrase ",
        "and you will find ",
        "who has the vision ",
        "and discerns those inner qualities "
    ];
    let fourthPart = [
        "for people to be rooted and the only way ",
        "if you pursue happiness ",
        "your true voice, ",
        "to recognize it as such ",
        "that make all men human ",
    ];
    let fifthPart = [
        "is through another person.",
        "you'll never find it.",
        "hold back and you won't.",
        "and find the meaning of it.",
        "and, therefore, brothers.",
    ];
    function getQuote() {
        let rFirstPart = Math.floor(Math.random() * firstPart.length);
        let rSecondPart = Math.floor(Math.random() * secondPart.length);
        let rThirdPart = Math.floor(Math.random() * thirdPart.length);
        let rFourthPart = Math.floor(Math.random() * fourthPart.length);
        let rFifthPart = Math.floor(Math.random() * fifthPart.length);
        let quote = firstPart[rFirstPart] + secondPart[rSecondPart] + thirdPart[rThirdPart] + fourthPart[rFourthPart] + fifthPart[rFifthPart];
        let div = document.getElementById("singleQuote");
        div.innerHTML = quote;
    }
    function exit() {
        if (confirm("Close Window?")) {
            close();
        }
    }
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", getQuote);
    let button2 = document.getElementById("button2");
    button2.addEventListener("click", exit);
});