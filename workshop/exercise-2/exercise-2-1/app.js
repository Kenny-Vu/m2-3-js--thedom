// Preset values
const FROGS = 5;
const track = document.querySelector('#track');
let laneNum = null;
let racersList = [];
let startButton = document.getElementById('startButton');
let ranking = [];
let podium = document.querySelector('.ranking');
import {frogStable} from "/workshop/exercise-2/assets/frogStable.js";

//creating the track
function createTrack(counter){
    for (let lanes=0;lanes<counter;lanes++){
        laneNum++;
        let lane = document.createElement('li');
        let laneSpan = document.createElement('span');
        laneSpan.innerText = laneNum;
        track.appendChild(lane);
        lane.appendChild(laneSpan);
        lane.setAttribute('id', 'lane'+ laneNum);
    }
}

//Function for generating required number of racer frogs

function createLineup(counter){
  for (let racerNum=0;racerNum<counter;racerNum++){
    racersList.push(frogStable[racerNum]);
    let laneId = document.getElementById('lane'+(racerNum+1))
    let racerId = document.createElement('div');
    racerId.setAttribute('id',racersList[racerNum].name);
    racerId.classList.add('frog');
    racerId.style.backgroundColor = racersList[racerNum].color;
    racerId.style.left = racersList[racerNum].progress;

    laneId.appendChild(racerId);
  }
}

// Function to start race
 function racingFrogs(frogObject) {
    let randomTime = Math.floor(Math.random()*1000) + 500;
    let frogName = document.getElementById(frogObject.name);
    let frogProgress = frogObject.progress;
    let standings = ['1st','2nd','3rd'];
    

    let intervalfunc = setInterval(function(){
        let hopDistance = Math.floor(Math.random()*15);
        frogProgress = frogObject.progress;
        frogObject.progress = frogObject.progress + hopDistance;
        frogName.style.left = `${frogProgress}%`;
        if(frogProgress > 100){
            console.log(`${frogObject.name} finished!`);
            ranking.push(frogObject.name);
            let winner = document.createElement('p');
            winner.innerText = `Position: ${ranking.indexOf(frogObject.name)+1} \nFrog:${frogObject.name}`;
            podium.appendChild(winner);
            clearInterval(intervalfunc);
        }   
    },randomTime) 
}

createTrack(FROGS);
createLineup(FROGS);

//Created a button because I got annoyed at my frogs starting the race on every refresh...
startButton.addEventListener('click',function(){
    for(let i=0;i<racersList.length;i++){
        racingFrogs(racersList[i]);
    }
})









