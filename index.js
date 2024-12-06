// Write your code here!

const rem= document.getElementById('main');
rem.remove();
const newHeader= document.createElement('h1');
newHeader.id= 'victory'
document.body.appendChild(newHeader);
const element= document.getElementById('victory')
element.textContent= "Sir Elly James is the champion"
