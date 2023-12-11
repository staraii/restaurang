
const menuDropdown = document.querySelector('menu');
const menuButton = document.querySelector('.menu-button');

const articleDish = document.querySelector('.article-dish');
const buttonHalfCircle = document.querySelector('.button-half-circle');

buttonHalfCircle.addEventListener('click', () => {
    alert("Tillagd!");
});

menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle("menu-open");
    });

    articleDish.addEventListener('click', () => {
        buttonHalfCircle.classList.toggle('button-half-circle-open');
        if(!buttonHalfCircle.textContent){
            setTimeout(() => {      
                buttonHalfCircle.textContent = "Lägg till +";              
            }, 1000);  
           
        } else {
            buttonHalfCircle.textContent = "";
        }
        
    });