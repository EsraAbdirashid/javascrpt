// string function using click Evants
let btn =document.querySelector('button');
let card = document.getElementById('card');

  btn.addEventListener('click',()=>{
        card.style.backgroundColor = 'white';
        card.style.color = 'blue'
  })