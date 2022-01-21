const current_rotation = 0;

document.querySelector(".rotate").addEventListener('load', function(){
    current_rotation -= 10;
document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
});