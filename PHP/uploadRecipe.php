<?php


    include 'connectPDO.php';

    
    $recipeJSON = $_REQUEST['recipe_JSON'];
    $recipeTitle = $_REQUEST['recipe_title'];
    $recipeImageUrl = $_REQUEST['recipe_image_url'];

    

    $sql = "INSERT INTO recipe_data";
    $sql .="(recipe_json, recipe_title, recipe_image_url)";
    $sql .="VALUES (:recipe_json, :recipe_title, :recipe_image_url)";
    

    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':recipe_json', $recipeJSON);
    $stmt->bindParam(':recipe_title', $recipeTitle );
    $stmt->bindParam(':recipe_image_url', $recipeImageUrl );

    $stmt->execute();
    
    
?>