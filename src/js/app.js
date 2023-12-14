
const mainMain = document.querySelector('main');


const articleSubsectionMenuFilters = document.querySelectorAll('.article-subsection-menu');
const liSubmenuFilter = document.querySelectorAll('.li-submenu-filter');
const buttonMenuFilterSub1 = document.querySelectorAll('.button-menu-filter-sub1');
const buttonMenuFilterSub2 = document.querySelectorAll('.button-menu-filter-sub2');
const buttonMenuFilterSub3 = document.querySelectorAll('.button-menu-filter-sub3');
const buttonMenuFilterSub4 = document.querySelectorAll('.button-menu-filter-sub4');

const sectionMenuBbqMeats = document.querySelector('.section-menu-bbqmeats');
const subSectionsMenuBbqMeats = document.querySelectorAll('.sub-section-menu-bbqmeats');

const sectionMenuSandwichPizza = document.querySelector('.section-menu-sandwichpizza');
const subSectionsMenuSandwichPizza = document.querySelectorAll('.sub-section-menu-sandwishpizza');

const sectionMenuDrinksAndSides = document.querySelector('.section-menu-drinksandsides');
const subSectionsMenuDrinksAndSides = document.querySelectorAll('.sub-section-menu-drinksandsides');

const sectionMenuDesserts = document.querySelector('.section-menu-desserts');
const subSectionsMenuDesserts = document.querySelectorAll('.sub-section-menu-desserts');

const sectionMenuCat = document.querySelectorAll('.section-menu-cat');

const imgMenuFilters = document.querySelectorAll('.img-menu-filters');


function menuFilters(){
   
    // Första raden filter
    for(let i = 0; i < articleSubsectionMenuFilters.length; i++){
        articleSubsectionMenuFilters[i].addEventListener('click', () => {
            for(let j = 0; j < articleSubsectionMenuFilters.length; j++){
                if(j === i){
                    liSubmenuFilter[j].classList.remove('hide');
                    articleSubsectionMenuFilters[j].classList.add('button-active');
                    sectionMenuCat[j].classList.remove('hide');
                    imgMenuFilters[j].classList.add('hide');

                        // Första menyvalet, bbq & meat
                        if(j === 0){

                            // Visar första sidan av bbq & meat
                            subSectionsMenuBbqMeats[0].classList.remove('hide');
                            buttonMenuFilterSub1[0].classList.add('button-sub-active');

                                for(let k = 1; k < subSectionsMenuBbqMeats.length; k++){
                                    subSectionsMenuBbqMeats[k].classList.add('hide');
                                    buttonMenuFilterSub1[k].classList.remove('button-sub-active');
                                }
                        } else if(j === 1){

                            subSectionsMenuSandwichPizza[0].classList.remove('hide');
                            buttonMenuFilterSub2[0].classList.add('button-sub-active');

                            for(let l = 1; l < subSectionsMenuSandwichPizza.length; l++){
                                subSectionsMenuSandwichPizza[l].classList.add('hide');
                                buttonMenuFilterSub2[l].classList.remove('button-sub-active');
                            }
                        } else if(j === 2){

                            subSectionsMenuDrinksAndSides[0].classList.remove('hide');
                            buttonMenuFilterSub3[0].classList.add('button-sub-active');

                                for(let m = 1; m < subSectionsMenuDrinksAndSides.length; m++){

                                    subSectionsMenuDrinksAndSides[m].classList.add('hide');
                                    buttonMenuFilterSub3[m].classList.remove('button-sub-active');
                                }
                        } else if(j === 3){

                            subSectionsMenuDesserts[0].classList.remove('hide');
                            buttonMenuFilterSub4[0].classList.add('button-sub-active');

                            for(let n = 1; n < subSectionsMenuDesserts.length; n++){

                                 subSectionsMenuDesserts[n].classList.add('hide');
                                 buttonMenuFilterSub4[n].classList.remove('button-sub-active');
                            }
                        }
                } else {
                    liSubmenuFilter[j].classList.add('hide');
                    articleSubsectionMenuFilters[j].classList.remove('button-active');
                    sectionMenuCat[j].classList.add('hide');
                }
            }
        })
    }

    // Andra raden filter. BBQ & Meat
   for(let i = 0; i < buttonMenuFilterSub1.length; i++){
        buttonMenuFilterSub1[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub1.length; j++){
                if(j === i){
                    buttonMenuFilterSub1[j].classList.add('button-sub-active');
                    subSectionsMenuBbqMeats[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub1[j].classList.remove('button-sub-active');
                    subSectionsMenuBbqMeats[j].classList.add('hide');
                }
            }

            
    });
   }

   // Andra raden filter,  Sandwich & pizza
   for(let i = 0; i < buttonMenuFilterSub2.length; i++){
        buttonMenuFilterSub2[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub2.length; j++){
                if(j === i){
                    buttonMenuFilterSub2[j].classList.add('button-sub-active');
                    subSectionsMenuSandwichPizza[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub2[j].classList.remove('button-sub-active');
                    subSectionsMenuSandwichPizza[j].classList.add('hide');
                }
            }

        
        });
    }

    //Andra raden filter, drinks & sides
    for(let i = 0; i < buttonMenuFilterSub3.length; i++){
        buttonMenuFilterSub3[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub3.length; j++){
                if(j === i){
                    buttonMenuFilterSub3[j].classList.add('button-sub-active');
                    subSectionsMenuDrinksAndSides[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub3[j].classList.remove('button-sub-active');
                    subSectionsMenuDrinksAndSides[j].classList.add('hide');
                }
            }
        });
    }

    // Andra raden filter, desserts
    for(let i = 0; i < buttonMenuFilterSub4.length; i++){
        buttonMenuFilterSub4[i].addEventListener('click', () => {
            for(let j = 0; j < buttonMenuFilterSub4.length; j++){
                if(j === i){
                    buttonMenuFilterSub4[j].classList.add('button-sub-active');
                    subSectionsMenuDesserts[j].classList.remove('hide');
                } else {
                    buttonMenuFilterSub4[j].classList.remove('button-sub-active');
                    subSectionsMenuDesserts[j].classList.add('hide');
                }
            }
        });
    }
    





}

menuFilters();












  const arrayOfBbq = [...db.bbqs];
  const arrayOfBurgers = [...db.burgers];
  const arrayOfFriedChicken = [...db.friedChicken];
  const arrayOfFriedChicken2 = [...db["friedChicken"]];
  

  function generateMenu(){

    const dishesFragment = document.createDocumentFragment();

    for(let i = 0; i < arrayOfBbq.length; i++){

        const newArticle = document.createElement('article');
        const articleAttr = document.createAttribute('data-id');
        articleAttr.value = arrayOfBbq[i]["id"];
        newArticle.setAttributeNode(articleAttr);

        const dishName = document.createElement('p');
        dishName.textContent = arrayOfBbq[i]["name"];
        dishName.classList.add('p-name');
        //const dishName = document.createTextNode(arrayOfBbq[i]["name"]);
        newArticle.appendChild(dishName);
        

        

        dishesFragment.appendChild(newArticle);
        
    }
    mainMain.appendChild(dishesFragment);

  }

  //generateMenu();