const button1 = document.getElementById('detail-1');
const button2 = document.getElementById('detail-2');
const button3 = document.getElementById('detail-3');
const button4 = document.getElementById('detail-4');
const button5 = document.getElementById('detail-5');

const element1 = document.getElementById('js-link-1');
const element2 = document.getElementById('js-link-2');
const element3 = document.getElementById('js-link-3');
const element4 = document.getElementById('js-link-4');
const element5 = document.getElementById('js-link-5');

const icon1 = document.getElementById('arrow-icon-1');
const icon2 = document.getElementById('arrow-icon-2');
const icon3 = document.getElementById('arrow-icon-3');
const icon4 = document.getElementById('arrow-icon-4');
const icon5 = document.getElementById('arrow-icon-5');


function showDetails(element, icon){
  if(element.className === 'details-links'){
    element.className = 'details-links-visible';
    icon.className = 'arrow-down-icon-rotated';
  }else{
    element.className = 'details-links';
    icon.className = 'arrow-down-icon';
  }
}

button1.addEventListener('click', ()=>{
  showDetails(element1, icon1);
});

button2.addEventListener('click', ()=>{
  showDetails(element2, icon2);
});
button3.addEventListener('click', ()=>{
  showDetails(element3, icon3);
});
button4.addEventListener('click', ()=>{
  showDetails(element4, icon4);
});
button5.addEventListener('click', ()=>{
  showDetails(element5, icon5);
});