const retrieveRecipeJSON = (recipeId) =>
{              
    var xmlhttp = new XMLHttpRequest();
    console.log(recipeId);

    xmlhttp.open("POST","../PHP/retrieveRecipeJSON.php?recipe_id="+recipeId,true);
              
    xmlhttp.send();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let JSONresponse = xmlhttp.responseText; //data returned as a JSON
                sessionStorage.setItem('RecipeJSON' ,JSONresponse)
            }
          
                  
    }

    
                
}