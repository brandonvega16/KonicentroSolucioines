<?php

class archivos
{
    public function insertar($datos)
    {
        $c = new conectar();
        $conexion = $c->conexion();
        setlocale(LC_TIME, "es_ES");
        date_default_timezone_set('America/Tijuana');
        $fecha = date('Y-m-d');
        $sql = "INSERT INTO ordenes (nombre, telefono, archivo, ruta, descripcion, total, sucursal, estatus, fecha) 
        VALUES (
            '$datos[0]', 
            '$datos[1]', 
            '$datos[2]',
            '$datos[3]',
            '$datos[4] $datos[5] $datos[6] $datos[7] $datos[8]',
            '$datos[9]',
            '$datos[10]',
            'Pendiente',
            '$fecha'
           )";
       
       
        return mysqli_query($conexion,$sql);
    }

    public function obtenerDato($idDato)
    {
        $c= new conectar();
        $conexion=$c->conexion();

        $sql = "SELECT Id, archivo, estatus, fecha from ordenes WHERE Id='$idDato'";

        $result = mysqli_query($conexion,$sql);

        $ver = mysqli_fetch_row($result);

        $datos = array(
            "Id" => $ver[0],
            "archivo" => $ver[1],
            "estatus" => $ver[2],
            "fecha" => $ver[3]
        );

        return $datos;
    }
}

?>