function play(option) {
    let pOption = option;
    let cOption = Math.floor(Math.random() * 2) + 1;

    document.getElementById('c-img').src = "";
    document.getElementById('results').innerHTML = " . . .";

    let wins = sessionStorage.getItem("winCount") || 0;
    let losses = sessionStorage.getItem("lossCount") || 0;

    if (wins == null) {
        wins = 0;
    } else {
        wins = wins;
    };

    if (losses == null) {
        losses = 0;
    } else {
        losses = losses;
    };

    setTimeout(() => {
        if (pOption === "heads" && cOption === 1) {
            document.getElementById('c-img').src = "images/heads.png";
            document.getElementById('results').innerHTML = "heads WINS";
            ++wins;
        } else if (pOption === "heads" && cOption === 2) {
            document.getElementById('c-img').src = "images/tails.png";
            document.getElementById('results').innerHTML = "heads LOSES";
            ++losses; 
        } else if (pOption === "tails" && cOption === 1) {
            document.getElementById('c-img').src = "images/heads.png";
            document.getElementById('results').innerHTML = "tails LOSES";
            ++losses;
        } else {
            document.getElementById('c-img').src = "images/tails.png";
            document.getElementById('results').innerHTML = "tails WINS";
            ++wins;
        }


        sessionStorage.setItem("winCount", wins);
        sessionStorage.setItem("lossCount", losses);
        document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
        document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    }, 200);

} // end of play function


function reset() {
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("lossCount", 0);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('c-img').src = "images/load.png";
    document.getElementById('results').innerHTML = "TALLIES";
}