// creat Element
let pragraph =document.createElement('p');
let body =document.querySelector('body');
pragraph.innerText ='hello pragraph';
body.appendChild(pragraph)
let img =document.createElement('img');
img.src = './dom pic.png';
body.appendChild(img)
// styling for dom
pragraph.style.color = 'white';
pragraph.style.backgroundColor ='blue';
pragraph.style.fontSize ='40px';
pragraph.style.padding ='10px';
img.style.width = '400px'