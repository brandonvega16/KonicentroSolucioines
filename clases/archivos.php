<?php

class archivos
{
    public function insertar($datos)
    {
        $c = new conectar();
        $conexion = $c->conexion();
        $fecha = date('Y-m-d');
        $sql = "INSERT INTO ordenes (nombre, telefono, archivo, ruta, descripcion, total, sucursal, fecha) 
        VALUES (
            '$datos[0]', 
            '$datos[1]', 
            '$datos[2]',
            '$datos[3]',
            '$datos[4] $datos[5] $datos[6] $datos[7] $datos[8]',
            '$datos[9]',
            '$datos[10]',
            '$fecha'
           )";
       
       
        return mysqli_query($conexion,$sql);
    }
}

?>