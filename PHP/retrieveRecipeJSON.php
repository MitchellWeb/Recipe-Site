<?php
require 'connectPDO.php';

$recipeId = $_REQUEST['recipe_id'];

$sql = "SELECT recipe_json FROM recipe_data WHERE recipe_id = :recipeId";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':recipeId', $recipeId);

$stmt->execute();

$stmt->setFetchMode(PDO::FETCH_ASSOC);

$row=$stmt->fetch();


echo $row['recipe_json'];


?>