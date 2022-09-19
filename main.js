
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const textField = document.querySelectorAll("p");
const buttonMore = document.querySelectorAll("button");
const titleH2 = document.querySelectorAll(".transformTitle");
const saveNameForm = document.querySelector('form');
const inputPhone = document.querySelector('#phone');
const errorMessageFields = document.querySelector('.errorMessage');
const sectionRegistration = document.querySelector('.registration');
const sectionWrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');

const countItem = items.length;
const sliderWidth = slider.offsetWidth;
const headerHeight = header.offsetHeight;


let itemWidth =  sliderWidth;
let leftSideWidth = sliderWidth/countItem;
let startMargin = sliderWidth - leftSideWidth;

homePage();
document.querySelector(".logo").addEventListener('click', homePage);

function homePage () {
  window.scrollTo(0,0);
  for (let i=0; i<countItem; i++){ 
    slider.style.overflowY = '';
    slider.style.display = 'flex';
    items[i].style.width = itemWidth +'px';
    items[i].style.marginRight = -startMargin +'px';  
    titleH2[i].style.opacity = 1;
    textField[i].style.opacity = 0;
    buttonMore[i].style.opacity = 0;
  };
}


showItems();

function showItems() {
  for (let i=0; i<countItem; i++) {
    
    buttonMore[i].addEventListener('click', (event) => {
      event.stopPropagation();
    });
    
    items[i].addEventListener ("click", () => {
      window.scrollTo(0,0);  
      items[i].style.marginRight = 0 + 'px';
      titleH2[i].style.opacity = 0;
      textField[i].style.opacity = 1;
      buttonMore[i].style.opacity = 1;
      
      for (let j=0; j<countItem; j++){
        if (j != i){
          items[j].style.marginRight = -itemWidth + 'px';
          titleH2[j].style.opacity = 0;  
        };
      };

      setTimeout(() => {
        slider.style.overflowY = 'auto';
        slider.style.display = 'block';
        slider.scrollTop = 600*i;

        for (let i=0; i<countItem; i++) {
          titleH2[i].style.opacity = 0;
          textField[i].style.opacity = 1;
          buttonMore[i].style.opacity = 1;
        };
      }, 2000);
      
    });
  };
};

sectionRegistration.addEventListener('click', () => {
  sectionRegistration.scrollIntoView();
})

inputPhone.addEventListener ('blur', () =>{
  if (/^\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/.test(inputPhone.value) === false) {
      errorMessageFields.innerHTML = 'Не правильный формат номера, необходимо: +7 (999) 999 99 99';      
  } ; 
});

inputPhone.addEventListener ('focus', () =>{
  //inputPhone.value = '';
  errorMessageFields.innerHTML = '';              
}); 

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = saveNameForm.elements.name.value;
  const phone = saveNameForm.elements.phone.value;
  const profession = saveNameForm.elements.profession.value;

  saveNameForm.elements.name.value = '';
  saveNameForm.elements.phone.value = '';
  saveNameForm.elements.profession.value = '';
});

