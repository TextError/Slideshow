const initSlideShow = () => {
    const slider = document.querySelectorAll('#slide');
    let index = 0;
    let time = 2000;
    slider[index].classList.add('active');
    setInterval(() => {
        slider[index].classList.remove('active');
        index++;
        if (index === slider.length)
            index = 0;
        slider[index].classList.add('active');
    }, time);
};
initSlideShow();
