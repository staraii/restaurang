
// --------- Header/Nav/Meny ------------

// Menyknapp - hamburgermeny
const menuButton = document.querySelector('.menu-button');

// Section - för menyfilter
const sectionFilter = document.querySelector('.section-filter');

// Dropdownmenyn
const menuDropdown = document.querySelector('menu');

// A - nodlista över länkar i dropdownmenyn
const linksMenu = document.querySelectorAll('.a-menu');

// Sections - nodlista, containrar för de olika sidornas innehåll t.ex. hem, meny mm.
const sectionContent = document.querySelectorAll('.section-content');

// Article - produktkort/maträtt på första sidan
const articleDagens = document.querySelectorAll('.article-dagens');
// Article - produktkort/maträtt på meny sidan
const articleMeny = document.querySelectorAll('.article-meny')
// Button - lägg till knapp på första sidan
const buttonArticleAddDagens = document.querySelectorAll('.button-article-add-dagens');
// Button - lägg till knapp på meny sidan
const buttonArticleAddMeny = document.querySelectorAll('.button-article-add-meny');
// Footer -
const footer = document.querySelector('footer');
// Button - expanderar footern
const buttonFooterOpener = document.querySelector('.button-footer-opener');

// Hindrar att användaren klickar på flera artiklar samtidigt.
let toggleLock = false;



// ----------------------------- FUNKTIONER -------------------------------------



// Funktion - lägger till eventlisteners på länkarna i menyn.

function setDropdownMenu() {
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
}



// Funktion - gör menyobjekten klickbara och expanderar lägg till knappen

function setArticlesDish(article, buttonAdd){
    for(let i = 0; i < article.length; i++){

        buttonAdd[i].addEventListener('click', () => {
            footer.classList.toggle('footer-added');
            setTimeout(() => {
                footer.classList.toggle('footer-added');
            }, 1000);  
        });

        article[i].addEventListener('click', () => {
            if(!toggleLock){
                toggleLock = true;
                
                if(!buttonAdd[i].textContent){
                    buttonAdd[i].classList.toggle('button-article-add-open');
                    setTimeout(() => {      
                        buttonAdd[i].textContent = "Lägg till +";  
                        toggleLock = false;            
                    }, 1000);        
                } else {
                    buttonAdd[i].textContent = "";
                    buttonAdd[i].classList.toggle('button-article-add-open');
                    setTimeout(() => {        
                        toggleLock = false;            
                    }, 1000);        
                }
            } 
            return;      
        });
    }
}



// Funktion - Gör menyknappen(hamburgermenyn) & "Se beställning"-knappen(expanderar footern) klickbara

function menuAndFooterOpeners(){

    // Gör menyknappen klickbar
    menuButton.addEventListener('click', () => {
        menuDropdown.classList.toggle("menu-open");
    });

    // Gör "se beställning"-knappen klickbar
    buttonFooterOpener.addEventListener('click', () => {
        if(buttonFooterOpener.innerText === "Se beställning"){
        
            footer.classList.toggle('footer-open');

            setTimeout(() => {        
                buttonFooterOpener.innerText = "Tillbaka";  
                buttonFooterOpener.style.backgroundColor = "#FFCB47";
                buttonFooterOpener.style.color = "#2C4251";
            }, 1000);   

        } else {
        
            footer.classList.toggle('footer-open');

            setTimeout(() => {        
                buttonFooterOpener.innerText = "Se beställning";   
                buttonFooterOpener.style.backgroundColor = "#2C4251";
                buttonFooterOpener.style.color = "#FFCB47";         
            }, 1000);        
        }
    });
}




setDropdownMenu();
setArticlesDish(articleDagens, buttonArticleAddDagens);
setArticlesDish(articleMeny, buttonArticleAddMeny);
menuAndFooterOpeners();
