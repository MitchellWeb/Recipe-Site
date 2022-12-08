<?php


    include 'connectPDO.php';

    
    $recipeJSON = $_REQUEST['recipe_JSON'];
    $recipeTitle = $_REQUEST['recipe_title'];

    

    $sql = "INSERT INTO recipe_data";
    $sql .="(recipe_json, recipe_title)";//
    $sql .="VALUES (:recipe_json, :recipe_title)";//
    

    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':recipe_json', $recipeJSON);
    $stmt->bindParam(':recipe_title', $recipeTitle );

    $stmt->execute();
    
    
?>