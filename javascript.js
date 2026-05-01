let userscore = 0;
let computerscore = 0;
let drawscore = 0;
let msg = document.querySelector("#message");
let usrscr = document.querySelector("#user-score");
let cmpscr = document.querySelector("#computer-score");
let drwscr = document.querySelector("#draw-score");

let getcomchoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randid = Math.floor(Math.random() * 3);   // randam *3 hamesha 2 se kam hoga number or floor use number ko round off kr dega to 0,1,2 me se ek number aayega
    return choices[randid];
}
let dramegame = () => {
    const masg = "It's a draw! Play again.";
    console.log(masg);
    msg.innerText = masg;
    msg.style.backgroundColor = "gray";
    drwscr.innerText = ++drawscore;
}
let showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        console.log("You win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        usrscr.innerText = ++userscore;

    } else {
        console.log("Computer wins!");
        msg.innerText = `Computer wins! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";   
        cmpscr.innerText = ++computerscore;
    }

}
let playgame = (userchoice) => {
    console.log("userchoice:", userchoice);
    const compchoice = getcomchoice();
    console.log("computerchoice:", compchoice);
    if(userchoice === compchoice) {
        dramegame();
    } else if(
        (userchoice === "Rock" && compchoice === "Scissors") ||
        (userchoice === "Paper" && compchoice === "Rock") ||
        (userchoice === "Scissors" && compchoice === "Paper")
    ) {
        showwinner(true, userchoice, compchoice);
    } else {
        showwinner(false, userchoice, compchoice);
    }
}
let choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.addEventListener("click", function() {
        const userchoice = this.id;
        playgame(userchoice); 
    });
}); 