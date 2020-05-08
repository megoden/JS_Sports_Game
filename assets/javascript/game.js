//Team 1 bellow _____________________________________________________________________________________________
let incrementButtonT1 = document.querySelector("#teamone-shoot-button"); 
let goalsT1 = document.querySelector("#teamone-numgoals");
let ShotsT1 = document.querySelector("#teamone-numshots");

incrementButtonT1.addEventListener("click", function() {

    console.log("+ button clicked T1");

 let newCounterValueT1 = Number(ShotsT1.innerHTML) + 1;

  ShotsT1.innerHTML = newCounterValueT1;

  let newgoalcounterT1= Number(goalsT1.innerHTML) + 1;

  goalsT1.innerHTML = newgoalcounterT1;
 
})


//team 2 bellow_______________________________________________________________________________________________
let incrementButtonT2 = document.querySelector("#teamtwo-shoot-button");
let goalsT2 = document.querySelector("#teamtwo-numgoals");
let shotsT2 = document.querySelector("#teamtwo-numshots");

incrementButtonT2.addEventListener("click", function() {

    console.log("+ button clicked T2");

 let newCounterValueT2 = Number(shotsT2.innerHTML) + 1;

  shotsT2.innerHTML = newCounterValueT2;

  let newgoalcounterT2= Number(goalsT2.innerHTML) + 1;

  goalsT2.innerHTML = newgoalcounterT2;
})
//_______________________________________________________________________________________________________________
let incrementButton = document.querySelector("#reset-button"); 
let resets = document.querySelector("#num-resets");
incrementButton.addEventListener("click", function() {
    console.log("+ button resets");
    let newCounterValue = Number(resets.innerHTML) + 1;
    resets.innerHTML = newCounterValue;

    let gamerestt1 = Number(ShotsT1.innerHTML) * 0
    ShotsT1.innerHTML = gamerestt1
    let gamerestT1 = Number(goalsT1.innerHTML) * 0
    goalsT1.innerHTML = gamerestT1
    let gamerestt2 = Number(shotsT2.innerHTML) * 0
    shotsT2.innerHTML = gamerestt2
    let gamerestT2 = Number(goalsT2.innerHTML) * 0
    goalsT2.innerHTML = gamerestT2


})
