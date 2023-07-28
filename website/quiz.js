
const correctAnswers=['B','B','B','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let score=0;
  let useranswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
  useranswers.forEach((answer,index)=>{
    if(answer===correctAnswers[index])
    {
      score=score+25;
    }
  });
   scroll(0,0)
  
   //result.textContent=`${score}%`
   //result.querySelector('span').textContent=`${score}%`
  
   result.classList.remove('d-none');

  let output=0;
  const timer=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`;
    if(score===output){
      clearInterval(timer);
      
    }
    output++;
   
  },10)

});