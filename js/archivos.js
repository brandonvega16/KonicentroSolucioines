$('#registrar').click(function () {

	var formData = new FormData(document.getElementById("frmArticulos"));

	$.ajax({
		url: "procesos/insertar.php",
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
				alertify.success('Archivo Enviado');
				setTimeout(function () { location.reload(); }, 2000);
			}
		}
	});
});