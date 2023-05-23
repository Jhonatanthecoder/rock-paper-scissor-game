
var rock = document.querySelector(".rock");
var sheet = document.querySelector(".sheet");
var scissor = document.querySelector(".scissors");
var score_player = document.querySelector(".player_score");
var score_cpu = document.querySelector(".cpu_score");
var winner = document.querySelector(".result");

rock.addEventListener("click", Rock);
sheet.addEventListener("click", Sheet);
scissor.addEventListener("click", Scissor);

score_player.textContent = 0;
score_cpu.textContent = 0;

function SelectWinner(){
    if(score_cpu.textContent == 5){
        result.textContent = "YOU LOOSE";
    } else if(score_player.textContent == 5){
        result.textContent = "GREAT YOU WIN";
    };
};

function cpuChoose(){
    cpu_election = Math.round(Math.random()*10);

    if(cpu_election < 4){
       cpu_selected = "Rock";
    }
    else if(cpu_election >= 4 && cpu_election <= 7){
        cpu_selected = "Sheet";
    }
    else {
        cpu_selected = "Scissor";
    }
};


function Rock(){
    cpuChoose();
    if(cpu_selected === "Sheet"){
        score_cpu.textContent ++;
    } else if(cpu_selected === "Scissor"){
        score_player.textContent ++;
    }
    SelectWinner();
};

function Sheet(){
    cpuChoose();
    if(cpu_selected === "Scissor"){
        score_cpu.textContent ++;
    } else if(cpu_selected === "Rock"){
        score_player.textContent ++;
    }
    SelectWinner();
};

function Scissor(){
    cpuChoose();
    if(cpu_selected === "Rock"){
        score_cpu.textContent ++;
    } else if(cpu_selected === "Sheet"){
        score_player.textContent ++;
    }
    SelectWinner();
};