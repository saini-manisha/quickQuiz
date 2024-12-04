const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion=[];
let acceptingAnswer=false;
let score=0;
let questionCounter=0;
let availableQuestion=[];
const progressText=document.getElementById("progressText");
const scoreText=document.getElementById("score");
const progressBarFull=document.getElementById("progressBarFull");


let questions=[
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

//CONSTANTS

const CORRECT_BONUS=10;
const MAX_QUESTION=3;

let startGame=()=>{
    questionCounter=0;
    score=0;
    availableQuestion=[...questions];
    
    getNewQuestion();
    
}
let getNewQuestion=()=>{

    if(availableQuestion.length===0 || questionCounter>=MAX_QUESTION){
        //going to end page
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("end.html")
    }
    questionCounter++;
    progressText.innerText=`Question ${questionCounter} / ${MAX_QUESTION}`;
    
    // update the progress bar full

    progressBarFull.style.width=((questionCounter/MAX_QUESTION)*100)+"%";

    const questionIndex=Math.floor(Math.random()*availableQuestion.length);
    currentQuestion=availableQuestion[questionIndex];
    question.innerText=currentQuestion.question;
    choices.forEach((choice)=>{
        const number=choice.dataset['number'];
        choice.innerText=currentQuestion['choice'+number];
    })
    availableQuestion.splice(questionIndex,1);
    acceptingAnswer=true;
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        if(!acceptingAnswer){
            return;
        }
        acceptingAnswer=false;
        const selectedChoice=e.target;
        const selectedAnswer=selectedChoice.dataset['number'];        
        const classToApply=selectedAnswer==currentQuestion.answer?"correct":"incorrect";
        if(classToApply=="correct"){
            increamentScore(CORRECT_BONUS)
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            scoreText.innerText=`${score}`;
            getNewQuestion();   
        }, 500);
        

             
    })
})
startGame()
const increamentScore=(num)=>{
    score+=num;
    scoreText.innerHTML=score;

}
