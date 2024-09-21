let hamburgerBtn = document.querySelector('.js-button-burger');
let navbar = document.querySelector('.js-starbucks-nav');
let mask = document.querySelector('.js-mask');

function showNav(){
  if(navbar.className === 'starbucks-nav js-starbucks-nav'){
    navbar.className = 'starbucks-nav-show js-starbucks-nav';
    mask.className = 'mask-active js-mask';
    showOriginal();
  
  }else{
    navbar.className = 'starbucks-nav js-starbucks-nav';
    mask.className = 'mask js-mask';
    document.body.style.filter = 'grayscale(0%)';
    showUpperCase();
  }
}

window.addEventListener('click', (event)=>{
  if(event.target.className === 'mask-active js-mask'){
    showNav();
    hamburgerBtn.classList.toggle('active');
  }
})

hamburgerBtn.addEventListener('click', ()=>{
  showNav();
  hamburgerBtn.classList.toggle('active');
});

let anchorMenu = document.querySelector('.js-anchor-menu');
let rewardsMenu = document.querySelector('.js-reward-menu');
let cardsMenu = document.querySelector('.js-menu-cards');

let menuSentence = "Menu";
let rewardsSentence = "Rewards"; 
let cardsSentence = "Gift Cards";

let upperMenuSentence;
let upperMenuRewards;
let upperMenuCards;

function showUpperCase(){
  upperMenuSentence = menuSentence.toUpperCase();
  anchorMenu.innerHTML = upperMenuSentence;

  upperMenuRewards = rewardsSentence.toUpperCase();
  rewardsMenu.innerHTML = upperMenuRewards;

  upperMenuCards = cardsSentence.toUpperCase();
  cardsMenu.innerHTML = upperMenuCards;
}

function showOriginal(){
  anchorMenu.innerHTML = menuSentence;
  rewardsMenu.innerHTML = rewardsSentence;
  cardsMenu.innerHTML = cardsSentence;
}

showUpperCase();





