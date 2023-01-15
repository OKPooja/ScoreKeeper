const p1Button=document.querySelector("#p1Button")
const p2Button=document.querySelector("#p2Button")
const resetButton=document.querySelector("#reset")
const p1Display=document.querySelector("#p1Display")
const p2Display=document.querySelector("#p2Display")
const winningScoreSelect=document.querySelector("#playto")
let p1Score=0;
let p2Score=0;
let winningScore=0;


p1Button.addEventListener('click', function(){
  if(p1Score!==winningScore && p2Score!==winningScore){
  p1Score++;
  p1Display.textContent=p1Score;
  }
  if(p1Score==winningScore)
  {
    p1Display.classList.add('has-text-success');
    p2Display.classList.add('has-text-danger');
  }
})
p2Button.addEventListener('click', function(){
  if(p2Score!==winningScore && p1Score!==winningScore){
  p2Score++;
  p2Display.textContent=p2Score;
  }
  if(p2Score==winningScore)
  {
    p2Display.classList.add('has-text-success');
    p1Display.classList.add('has-text-danger');
  }
})
winningScoreSelect.addEventListener('change',function(){
  winningScore=parseInt(this.value);
  reset();
})
resetButton.addEventListener('click',reset)

function reset(){
  p1Display.textContent=0;
  p2Display.textContent=0;
   p1Score=0;
   p2Score=0;
   p1Display.classList.remove('has-text-success','has-text-danger');
   p2Display.classList.remove('has-text-success','has-text-danger');
}