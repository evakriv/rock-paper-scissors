let showScore=document.querySelector('.scoreBoard__number h2')
let btnSigns=document.querySelectorAll('.playField__item')
let playField=document.querySelector('.playField');

let showWinner =document.querySelector('.displayWinner');
let userImage =document.querySelector('#user-img');
let pcImage= document.querySelector('#pc-img');
let resultDeclaration = document.querySelector('.result');
let playAgain = document.querySelector('.playAgain--btn') 
let pcResult=document.querySelector('.displayWinner__pc')
let displayWinnerResult =document.querySelector('.displayWinner__result ')

let rulesBtn=document.querySelector('.rules--btn');
let closeBtn =document.querySelector('#close--btn');
let overlay=document.querySelector('.overlay');
let rulesBox=document.querySelector('.rules');

//toggleClass
let classToggle =(element)=>{
element.classList.contains('hidden')?
      element.classList.remove('hidden')   
   :
        element.classList.add('hidden') 
    }  

//the core
const userPick=(selected)=>{
let userChoice = selected.target.id;
classToggle(playField);
classToggle(showWinner)

setTimeout(()=>displayWinnerResult.classList.remove('hidden'),2000);
setTimeout(()=>document.querySelector('.displayWinner__pc .img--frame').classList.remove('hidden'),1000)

displayChoice(userChoice,'person');
declareWinner(userChoice,computerSays())
}
btnSigns.forEach(btn=>{
    btn.addEventListener('click',userPick)
})

//displaying userchoice
let displayChoice=function(choice,identity){
    if(identity ==='person'){
        userImage.src=`./images/icon-${choice}.svg`;
        userImage.parentElement.classList.add(`${choice}--color`);
    }else {
       pcImage.src=`./images/icon-${choice}.svg`
       pcImage.parentElement.classList.add(`${choice}--color`);
    }
  
}

//computer choice function
let computerSays=function(){
    let number = Math.floor(Math.random()*3);
    let computerChoice;
    
    switch(number){
        case 0:
            computerChoice='rock'
            break;
        case 1:
            computerChoice='paper'
            break;
        case 2:
            computerChoice='scissors'

    }
    displayChoice(computerChoice,'computer')
    return computerChoice  
} 

//compares user and computer choice,declares a winner and updates scores
let declareWinner =(input1,input2)=>{
    if(input1===input2){
        resultDeclaration.textContent = "It's a tie!"
    }
    else if(input1==='rock'&& input2==='paper'|| input1==='paper'&& input2==='scissors'||input1==='scissors'&& input2==='rock'){
        resultDeclaration.textContent='You Lost!' 
        
        
    }else{
        resultDeclaration.textContent='You won!'
        
    }
  upDateScore(resultDeclaration.textContent)
}

let score=0;
let upDateScore=function (result){
    if(result ==='You won!'){
        score+=1;
    }else if(result==='You Lost!'){
        score-=1;
    }
    showScore.textContent
    =score;
}

//interaction with btns
playAgain.addEventListener('click',()=>{
    classToggle(playField);
    classToggle(showWinner);
    classToggle(pcResult);
    classToggle(displayWinnerResult);
    pcImage.parentElement.className ='img--frame';
    userImage.parentElement.className ='img--frame';
    document.querySelector('.displayWinner__pc .img--frame').classList.add('hidden');
})
rulesBtn.addEventListener('click',()=>{
         classToggle(overlay);
        classToggle(rulesBox);
        console.log('clicked rules')
})
closeBtn.addEventListener('click',()=>{
     classToggle(overlay);
    classToggle(rulesBox);
})
