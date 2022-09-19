
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const textField = document.querySelectorAll("p");
const buttonMore = document.querySelectorAll("button");
const titleH2 = document.querySelectorAll(".transformTitle");
const saveNameForm = document.querySelector('form');
const inputPhone = document.querySelector('#phone');
const errorMessageFields = document.querySelector('.errorMessage');
const sectionRegistration = document.querySelector('.registration');
const headerLink = document.querySelectorAll('.linkBlock__item');


const countItem = items.length; //количество слайдов
const sliderWidth = slider.offsetWidth; // длина слайдера

let itemWidth =  sliderWidth; // ширина слайда
let leftSideWidth = sliderWidth/countItem; // ширина левого края слайда на дом странице
let startMargin = sliderWidth - leftSideWidth; // марджин для слайдов на старте

homePage();
document.querySelector(".logo").addEventListener('click', homePage);


function homePage () {
  window.scrollTo(0,0); // скролл вверх

  //обнуляем стили
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


showItems(); // раскрытие слайда

function showItems() {
  for (let i=0; i<countItem; i++) {
    
    // блок всплытия клика
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

      // появляется скролл
      setTimeout(() => {
        slider.style.overflowY = 'auto';
        slider.style.display = 'block';
        slider.scrollTop = 600*i;

        for (let i=0; i<countItem; i++) {
          titleH2[i].style.opacity = 0;
          textField[i].style.opacity = 1;
          buttonMore[i].style.opacity = 1;
        };
      }, 1000);
      
    });
  };
};

sectionRegistration.addEventListener('click', () => {
  sectionRegistration.scrollIntoView(); // перевод скролла на эту секцию
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
