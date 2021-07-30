// selectors
const accordionBtn = document.querySelectorAll('.question');
const pTag  = document.querySelectorAll('.faq-accordion p');

// Event listeners

accordionBtn.forEach(e => {
    e.addEventListener('click' , showAnswer);
})

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