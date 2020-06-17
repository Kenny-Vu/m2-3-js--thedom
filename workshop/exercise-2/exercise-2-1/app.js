// Preset values
const FROGS = 3;
const track = document.querySelector('#track');
let laneNum = null;
let racersList = [];
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
    racersList[racerNum].progress = 0;
    let laneId = document.getElementById('lane'+(racerNum+1))
    let racerId = document.createElement('div');

    racerId.setAttribute('id',racersList[racerNum].name);
    racerId.classList.add('frog');
    racerId.style.backgroundColor = racersList[racerNum].color;
    racerId.style.left = racersList[racerNum].progress;

    laneId.appendChild(racerId);
  }
}

//Function for getting the frogs to hop hop!
function racingFrogs(frogObject){
    let hopDistance = Math.floor(Math.random()*15);
    let frogName = document.getElementById(frogObject.name);
    let frogProgress = frogObject.progress;
    frogObject.progress = frogObject.progress + hopDistance;
    console.log(frogObject.progress);
    frogName.style.left = `${frogProgress}%`;
    if(frogObject.progress >= 100){
        clearInterval(raceStart);
    }
}


let raceStart = setInterval(function(){
    racersList.forEach(racingFrogs);

},1000);



createTrack(FROGS);
createLineup(FROGS);










