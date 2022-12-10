<?php
require 'connectPDO.php';
$recipeTitleList = [];
$recipeImgUrlList = [];
$recipeIDList = [];
$dataArray = [];

$sql = "SELECT recipe_id,recipe_title,recipe_image_url FROM recipe_data";

$stmt = $conn->prepare($sql);

$stmt->execute();

$stmt->setFetchMode(PDO::FETCH_ASSOC);

while( $row=$stmt->fetch())
{
   array_push($recipeIDList,$row['recipe_id']);
   array_push($recipeTitleList,$row['recipe_title']);
   array_push($recipeImgUrlList,$row['recipe_image_url']);
   
}
array_push($dataArray, $recipeTitleList, $recipeImgUrlList, $recipeIDList);
echo json_encode($dataArray);

?>