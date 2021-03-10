
//form uretme

let formElement = document.createElement('form');

//input uretme

let inputElement = document.createElement('input');
inputElement.textContent = 'yasinizi giriniz';
inputElement.type = 'text';

//buton uretme

let buttonElement = document.createElement('button');

buttonElement.className = 'btn';
buttonElement.innerHTML='PRESS!';

//inputun ve butonun forma eklenmesi

formElement.appendChild(inputElement);
formElement.appendChild(buttonElement);

//formun sectigimiz dive eklenmesi

 let div = document.querySelector('#formDiv');//burada divimizi seciyoruz!!
 div.appendChild(formElement);