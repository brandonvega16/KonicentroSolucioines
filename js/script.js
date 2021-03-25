$('#Id').hide();

function agregarDato()
    {
        vacios = validarFormVacio('frmFolios');

        if (vacios > 0) {
            alertify.alert('Campos Vacios', 'Debes Llenar todos los Campos!');
            return false;
        }
        var idDato = document.getElementById("folio").value;
        $.ajax({
                type:"POST",
                data: "Id=" + idDato ,
                url:"../procesos/obtenerDato.php",
                success: function(r)
                { 
                    dato = JSON.parse(r);
                    document.getElementById('orden').textContent ="Folio: " + dato['Id'];
                    document.getElementById('doc').textContent ="Doc: " + dato['archivo'];
                    document.getElementById('estatus').textContent ="Estatus: " + dato['estatus'];
                    document.getElementById('fecha').textContent ="Fecha: " + dato['fecha'];
                }
            });
}
