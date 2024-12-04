const username=document.getElementById("username");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const finalScore=document.getElementById("finalScore");


const mostRecentScore=localStorage.getItem("mostRecentScore");
finalScore.innerText=mostRecentScore
username.addEventListener("keyup",()=>{
    console.log(username.value);
    saveScoreBtn.disabled=!username.value;
    
})
const saveHighScore=(e)=>{
    e.preventDefault();
    localStorage.setItem(username.value,localStorage.getItem("mostRecentScore"));
    
}
