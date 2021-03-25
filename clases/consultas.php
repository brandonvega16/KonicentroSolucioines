<?php
require_once "conexioin.php";
        $c = new conectar();
        $conexion = $c->conexion();
		$query = "SELECT Id FROM ordenes ORDER BY Id +1 DESC LIMIT 1";
		$autoI = mysqli_query($conexion,$query);
        
?>