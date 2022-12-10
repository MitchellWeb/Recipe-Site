const retrieveRecipe = () =>
{              
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET","../PHP/retrieveRecipe.php",true);
              
    xmlhttp.send();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                let JSONresponse = xmlhttp.responseText; //data returned as a JSON
                let dataResponse = JSON.parse(JSONresponse);

                //seperate the arrays from the original JSON and store in seperate JSON objects for storage
                let titleArray = JSON.stringify(dataResponse[0]);
                let imageArray = JSON.stringify(dataResponse[1]);
                let idArray = JSON.stringify(dataResponse[2]);
                

                //send arrays to local storage as JSON
                sessionStorage.setItem("RecipeTitleArray", titleArray);
                sessionStorage.setItem("RecipeImageArray", imageArray);
                sessionStorage.setItem("RecipeIdArray", idArray);
                

            }

                  
    }
                
}