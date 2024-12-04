const username=document.getElementById("username");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const finalScore=document.getElementById("finalScore");
const mostRecentScore=localStorage.getItem("mostRecentScore");
const highScore=JSON.parse(localStorage.getItem("highScore")) ||[];
finalScore.innerText=mostRecentScore
username.addEventListener("keyup",()=>{
    console.log(username.value);
    saveScoreBtn.disabled=!username.value;
    
})
const saveHighScore=(e)=>{
    e.preventDefault();
    
    const score={
        name:username.value,
        score:mostRecentScore
    }
    highScore.push(score);
    highScore.sort((a,b)=>b.score-a.score);
    highScore.splice(5);
    localStorage.setItem("highScore",JSON.stringify(highScore));
    window.location.assign("index.html");
}
