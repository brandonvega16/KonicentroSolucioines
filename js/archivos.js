$('#registrar').click(function () {

	vacios = validarFormVacio('frmArticulos');

        if (vacios > 0) {
            alertify.alert('Campos Vacios', 'Debes Llenar todos los Campos!');
            return false;
        }
		
	var formData = new FormData(document.getElementById("frmArticulos"));

	$.ajax({
		url: "../procesos/insertar.php",
		type: "post",
		dataType: "html",
		data: formData,
		cache: false,
		contentType: false,
		processData: false,

		success: function (data) {
			//alert(data);
			if (data == "1") {
				alertify.error('Erro al Subir Archivo');
			} else {
				var id = document.getElementById("Id").value;
				alertify
					.alert("Konicentro","Archivo Enviado, su Folio es: " + id, function () {
						alertify.message('OK');
						setTimeout(function () { location.reload(); }, 2000);
					});
				
			}
		}
	});
});

