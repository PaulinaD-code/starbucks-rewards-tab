import { Freefavourites } from "./favouritesData.js";

function generateRewards(){
  let container = '';

  Freefavourites.forEach((offer) => {
     container += `
      <div class="offer-button js-offer-button"
      data-offer-id=${offer.id}>
        ${offer.id}
        <span aria-hidden="true" class="color-gold text-xs">★</span>
        <div class="tabs--slider" 
        data-slider-id=${offer.id}></div>
      </div>      
    `
    document.querySelector('.js-reward-container').innerHTML = container
  })
}

function generateSpan(){
  let html = `
  <span class="favoutires-reward-slider js-favourites-reward-slider">
  </span>
  `
  document.querySelector('.js-reward-container').innerHTML += html
}

generateRewards();
generateSpan();

document.querySelectorAll('.js-offer-button')
  .forEach((button)=>{
    
    button.addEventListener('click', () => {
      const offerId = button.dataset.offerId;
  
      const matchingProduct = findProduct(offerId);

      let html = `
      <div class="free-drink-variery">
       <div class="free-drink-variery-subcontainer">
        <div class="free-offer-child-image">
          <img src=${matchingProduct.img} class="free-offer-img">
        </div>
        <div class="free-offer-child-description">
          <h2>${matchingProduct.title}</h2>
          <p>${matchingProduct.description}</p>
        </div>
       </div>
      </div> 
      `
      document.querySelector('.js-reward-variery').innerHTML = html
    })
  })

  function findProduct(offerId){
    let matchingProduct;

    Freefavourites.forEach((element) => {
      if(element.id === offerId){
        matchingProduct =  element
      }
    })
    return matchingProduct
  }

  let slider = document.querySelector('.js-favourites-reward-slider');

  let button = document.querySelectorAll('.js-offer-button');
  let indexValue = 0;
  let leftPosition = 0;

  button.forEach((item, index) => {
    slider.style.width = button[0].clientWidth + 'px';
    slider.style.left = leftPosition + 'px';
    
    item.addEventListener('click', ()=>{
      slider.style.width = item.clientWidth + 'px';
      indexValue = index;
      getLeftPosition();
      slider.style.left = leftPosition + 'px';
      leftPosition = 0;
    })
  })

  //getting left position for slider to slide.

  function getLeftPosition(){
    for(let i = 0; i < indexValue; i++){
      const element = button[i];
      leftPosition += element.clientWidth;
    }
  }
