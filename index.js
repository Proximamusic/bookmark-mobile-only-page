// selectors
const accordionBtn = document.querySelectorAll('.question');
const pTag  = document.querySelectorAll('.faq-accordion p');
const dropDown = document.querySelector('.navbar-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const burger = document.querySelector('.burger');
const closing = document.querySelector('.close');

// Event listeners

accordionBtn.forEach(e => {
    e.addEventListener('click' , showAnswer);
})

burger.onclick = function(){
    dropDown.style.display = 'flex';
    setTimeout(()=>{dropDown.classList.add('dropdown-animation');
    dropdownContent.style.opacity = '1';
}, 100)
    
}
closing.onclick = function(){
    dropDown.classList.remove('dropdown-animation');
    setTimeout(()=>{dropDown.style.display = 'none';
    dropdownContent.style.opacity = '0';
}, 400)
}

// functions

function showAnswer(event){

    if(this.classList.contains('open')){
        this.classList.remove('open');
        this.nextElementSibling.style.height = '0' ;


    }else{
        accordionBtn.forEach(e=>{e.classList.remove('open')});
        pTag.forEach(e=>{e.style.height = "0"});

        this.classList.add('open');
        this.nextElementSibling.style.height = '170px' ;
    }
    
    
}