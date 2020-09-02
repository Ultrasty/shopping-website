<?php
$id=$_GET["id"];
$password=$_GET["password"];
$response=0;
if($id=="sty" && $password==123456)$response=1;
echo $response;
?>