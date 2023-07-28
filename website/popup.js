const popclass=document.querySelector('.popup-wrapper');
      const pop=document.querySelector('button');
      pop.addEventListener('click',()=>{
          popclass.style.display='block';
      });

      const close=document.querySelector('.popup-close');
      close.addEventListener('click',()=>{
        popclass.style.display='none';
      });

      //const clas=document.querySelector('.popup-wrapper');
      popclass.addEventListener('click',()=>{
        popclass.style.display='none';
      })