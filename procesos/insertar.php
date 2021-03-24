<?php
    require_once "../clases/conexioin.php";
    require_once "../clases/archivos.php";

    $obj = new archivos();
  
    $nombreImg = $_FILES['archvivo']['name'];
    $ruta =  $_FILES['archvivo']['tmp_name'];
    $carpeta = "../Archivos/";
    $rutaFinal = $carpeta.$nombreImg;

    $datosImg = array(
        $_POST['nombre'],
        $_POST['telefono'],
        $nombreImg,
        $rutaFinal,
        $_POST['Stamano'],
        $_POST['Spapel'],
        $_POST['Icantidad'],
        $_POST['Scolor'],
        $_POST['Scaras'],
        $_POST['todalOrden'],
        $_POST['Ssucursal']
    );

    if(move_uploaded_file($ruta, $rutaFinal))
    {
        echo $obj->insertar($datosImg);
        print_r($datosImg);
    }


    //print_r($datos);
    //$obj->insertarArticulo($datos);
?>