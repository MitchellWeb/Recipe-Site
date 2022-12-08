
addIngredient = () =>{
    let ingredientTemp = document.querySelector("#ingredientTemp");
    let tempClone = ingredientTemp.content.cloneNode(true);
    document.querySelector('#addToSection').appendChild(tempClone);
   }

loadIngredient = () =>{

    let addIngredientButton = document.querySelector('#addIcon > img');
    console.log(addIngredientButton);
    addIngredientButton.onclick = addIngredient;
    
  }


