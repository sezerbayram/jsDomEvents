


//form uretme

let formElement1 = document.createElement('form');
let formElement2 = document.createElement('form');
let formElement3 = document.createElement('form');
      formElement1.style.margin = '70px';
      formElement2.style.margin = '70px';
      formElement3.style.margin = '70px';
    //  formElement1.style.marginLeft = '120px';
    //  formElement2.style.marginLeft = '120px';
    //  formElement3.style.marginLeft = '120px';

//input uretme

let inputElement1 = document.createElement('input');
    inputElement1.placeholder = 'yasinizi giriniz';
    inputElement1.type = 'text';
    inputElement1.style.marginRight = '10px'
let inputElement2 = document.createElement('input');
    inputElement2.placeholder = 'adinizi giriniz';
    inputElement2.type = 'text';
    inputElement2.style.marginRight = '10px'
let inputElement3 = document.createElement('input');
    inputElement3.placeholder = 'numaranizi giriniz';
     inputElement3.type = 'text';
     inputElement3.style.marginRight = '10px'

//buton uretme

let buttonElement1 = document.createElement('button');
    buttonElement1.className = 'btn btn-primary';
    buttonElement1.innerHTML='PRESS!';
let buttonElement2 = document.createElement('button');
    buttonElement2.className = 'btn btn-success';
    buttonElement2.innerHTML='PRESS!';
let buttonElement3 = document.createElement('button');
    buttonElement3.className = 'btn btn-info';
    buttonElement3.innerHTML='PRESS!';

//inputun ve butonun forma eklenmesi

formElement1.appendChild(inputElement1);
formElement1.appendChild(buttonElement1);
formElement2.appendChild(inputElement2);
formElement2.appendChild(buttonElement2);
formElement3.appendChild(inputElement3);
formElement3.appendChild(buttonElement3);

// dive eklenmesi ve div uretilmesi

 let divForm = document.createElement('div');
      divForm.style.border = '2px solid coral';
    //  div.style.borderRadius = '200px';
    divForm.style.margin= '30px';
    divForm.className = 'col-md-4';
 
     divForm.appendChild(formElement1);
     divForm.appendChild(formElement2);
     divForm.appendChild(formElement3);



 //ikinci divimiz icin ayirdigimiz alandaki calismalar!!!

 //ul uretme

 let ulElement = document.createElement('ul');
 ulElement.className = 'list-group'
 

 //li uretme

 let liElement1 = document.createElement('li');
 let liElement2 = document.createElement('li');
 let liElement3 = document.createElement('li');
 liElement1.style.marginTop = '70px';
 liElement1.innerHTML = 'HOMEPAGE'
 liElement2.innerHTML = 'ABOUT US'
 liElement3.innerHTML = 'LINKS'
 liElement1.className = 'list-group-item'
 liElement2.className = 'list-group-item'
 liElement3.className = 'list-group-item'
 
  
 //li'lerin ul'ye eklenmesi

 ulElement.appendChild(liElement1);
 ulElement.appendChild(liElement2);
 ulElement.appendChild(liElement3);

 //ul'nin ikinci div'imize eklenmesi


  let divUl = document.createElement('div');
  divUl.className = 'col-md-4';
       divUl.style.border = '2px solid coral';
       divUl.style.margin = '30px';
    //   div2.style.margin = '30px';

      divUl.appendChild(ulElement);

      //divlerin uretilmesi

      
let bigDiv = document.querySelector('.row');
bigDiv.style.backgroundColor = 'powderBlue'

let emptyDiv = document.createElement('div');
emptyDiv.className = 'col-md-3'

bigDiv.appendChild(divForm);
bigDiv.appendChild(emptyDiv);
bigDiv.appendChild(divUl);
