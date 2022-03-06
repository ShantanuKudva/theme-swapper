const container=document.querySelector('.sun-moon-container');

document.querySelector('.theme-toggle-button').addEventListener('click' , function(){
    document.body.classList.toggle('dark');
    //parseint parses a string and returns with an integer
    const currentRotation = parseInt(getComputedStyle(container).getPropertyValue('--rotation'));
    container.style.setProperty('--rotation', currentRotation + 180);
})

