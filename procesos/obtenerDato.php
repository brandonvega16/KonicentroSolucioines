<?php
require_once "../clases/conexioin.php";
require_once "../clases/archivos.php";

$obj = new archivos();

$idDato = $_POST['Id'];

echo json_encode($obj->obtenerDato($idDato)); 

?>