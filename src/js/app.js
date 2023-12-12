
const menuDropdown = document.querySelector('menu');
const menuButton = document.querySelector('.menu-button');




//Dropdown meny - 
const sectionFilter = document.querySelector('.section-filter');
let sectionContent = document.querySelectorAll('.section-content');
let linksMenu = document.querySelectorAll('.a-menu');

for(let i = 0; i < linksMenu.length; i++){
    linksMenu[i].addEventListener('click', () => {
        for(let j = 0; j < linksMenu.length; j++){
            if(linksMenu[i] === linksMenu[j] && i === 1){
                sectionContent[j].classList.remove('hide');
                sectionFilter.classList.remove('hide');

            } else if(linksMenu[i] === linksMenu[j]){
                sectionContent[j].classList.remove('hide');
                sectionFilter.classList.add('hide');
            } else{
                sectionContent[j].classList.add('hide');
            }
            
        }
    });
}

const articleDish = document.querySelector('.article-dish');
const buttonHalfCircle = document.querySelector('.button-half-circle');

const footer = document.querySelector('footer');
const buttonFooterOpener = document.querySelector('.button-footer-opener');

let toggleLock = false;

buttonHalfCircle.addEventListener('click', () => {
    footer.classList.toggle('footer-added');
    setTimeout(() => {
        footer.classList.toggle('footer-added');
    }, 1000);
    
});

menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle("menu-open");
    });

articleDish.addEventListener('click', () => {
    if(!toggleLock){
        toggleLock = true;
        
        if(!buttonHalfCircle.textContent){
            buttonHalfCircle.classList.toggle('button-half-circle-open');
            setTimeout(() => {      
                buttonHalfCircle.textContent = "Lägg till +";  
                toggleLock = false;            
            }, 1000);        
        } else {
            buttonHalfCircle.textContent = "";
            buttonHalfCircle.classList.toggle('button-half-circle-open');
            setTimeout(() => {        
                toggleLock = false;            
            }, 1000);        
        }
    } 
    return;      
});

buttonFooterOpener.addEventListener('click', () => {
    if(buttonFooterOpener.innerText === "Se beställning"){
        
        footer.classList.toggle('footer-open');
        setTimeout(() => {        
            buttonFooterOpener.innerText = "Tillbaka";  
            buttonFooterOpener.style.backgroundColor = "#FFCB47";
            buttonFooterOpener.style.color = "#2C4251";
        }, 1000);        
    } else{
        
        footer.classList.toggle('footer-open');
        setTimeout(() => {        
            buttonFooterOpener.innerText = "Se beställning";   
            buttonFooterOpener.style.backgroundColor = "#2C4251";
            buttonFooterOpener.style.color = "#FFCB47";         
        }, 1000);        
        
    }
    
});