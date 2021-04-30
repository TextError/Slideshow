const initSlideShow = ():void => {
  const slider: NodeListOf<Element> = document.querySelectorAll('#slide');
  let index: number = 0;
  let time: number = 2000;

  slider[index].classList.add('active');  
  
  setInterval(() => {
    slider[index].classList.remove('active');
    
    index++;

    if(index === slider.length) index = 0; 
    
    slider[index].classList.add('active');

  }, time);
};

initSlideShow();