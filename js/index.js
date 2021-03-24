var archivoInput = document.getElementById('archvivo');
var ruta = archivoInput.value;
var extension = /(.pdf)$/i;
var pdfDoc = null;
$('#registrar').hide();

document.querySelector('#archvivo').addEventListener('change', () => {

    var pdf = document.querySelector('#archvivo').files[0];
    var pdfUrl = URL.createObjectURL(pdf);
    var url = pdfUrl;
    archivoInput = document.getElementById('archvivo');
    ruta = archivoInput.value;

    if (!extension.exec(ruta)) {
        alertify.error('Favor de Seleccionar archivo Pdf');
        archivoInput.value = '';
    }
    else {
        // Loaded via <script> tag, create shortcut to access PDF.js exports.
        var pdfjsLib = window['pdfjs-dist/build/pdf'];

        // The workerSrc property shall be specified.
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

        pdfDoc
        pageNum = 1,
            pageRendering = false,
            pageNumPending = null,
            scale = 0.8,
            canvas = document.getElementById('the-canvas'),
            ctx = canvas.getContext('2d');

        /**
         * Get page info from document, resize canvas accordingly, and render page.
         * @param num Page number.
         */

        function renderPage(num) {
            pageRendering = true;
            // Using promise to fetch the page
            pdfDoc.getPage(num).then(function (page) {
                var viewport = page.getViewport({ scale: scale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);

                // Wait for rendering to finish
                renderTask.promise.then(function () {
                    pageRendering = false;
                    if (pageNumPending !== null) {
                        // New page rendering is pending
                        renderPage(pageNumPending);
                        pageNumPending = null;
                    }
                });
            });

            // Update page counters
            document.getElementById('page_num').textContent = num;

        }
        /**
       * If another page rendering in progress, waits until the rendering is
       * finised. Otherwise, executes rendering immediately.
       */
        function queueRenderPage(num) {
            if (pageRendering) {
                pageNumPending = num;
            } else {
                renderPage(num);
            }
        }

        /**
         * Displays previous page.
         */
        function onPrevPage() {
            if (pageNum <= 1) {
                return;
            }
            pageNum--;
            queueRenderPage(pageNum);
        }
        document.getElementById('prev').addEventListener('click', onPrevPage);

        /**
         * Displays next page.
         */
        function onNextPage() {
            if (pageNum >= pdfDoc.numPages) {
                return;
            }
            pageNum++;
            queueRenderPage(pageNum);
        }
        document.getElementById('next').addEventListener('click', onNextPage);

        pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
            pdfDoc = pdfDoc_;
            document.getElementById('page_count').textContent = pdfDoc.numPages;

            // Initial/first page rendering
            renderPage(pageNum);
            console.log(pdfDoc.numPages);

        });
    }
});

function cargarDatos() {
    console.log(paginas);
    //var total = pdfDoc.numPages * 1.50;
    //var pagar = total * 2;
    //console.log(paginas);
    //document.getElementById('todalOrden').value = "Total: \$ " + pagar;
}


$(document).ready(function () {
    $("#cargar").click(function () {
        var paginas = $("#page_count").text();
        var papel = document.getElementById("Spapel").value;
        var tamaño = document.getElementById("Stamano").value;
        var color = document.getElementById("Scolor").value;
        var caras = document.getElementById("Scaras").value;
        var cantidad = document.getElementById("Icantidad").value;
        var sucursal = document.getElementById("Ssucursal").value;
        var total = 0;
        var pagar = 0;
        console.log(papel, tamaño, color, caras, cantidad);
        if ($('#archvivo').val().length == 0) {
            alertify.error('No se ha seleccionado ningun archivo');
        }
        else {
            // Carta 1 Cara Bond y Couche
            if (tamaño == "Carta" && color == "BN" && papel=="Bond" && caras == "1 Cara") {
                total = paginas * 1;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Carta" && color == "Color" && papel=="Bond" && caras == "1 Cara")
            {
                total = paginas * 2;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            else if (tamaño == "Carta" && color == "BN" && papel=="Couche" && caras == "1 Cara") {
                total = paginas * 2;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Carta" && color == "Color" && papel=="Couche" && caras == "1 Cara")
            {
                total = paginas * 4;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            //Carta 2 Caras 
            else if (tamaño == "Carta" && color == "BN" && papel=="Bond" && caras == "2 Caras") {
                total = paginas * 1.50;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Carta" && color == "Color" && papel=="Bond" && caras == "2 Caras")
            {
                total = paginas * 2.50;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            else if (tamaño == "Carta" && color == "BN" && papel=="Couche" && caras == "2 Caras") {
                total = paginas * 3;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Carta" && color == "Color" && papel=="Couche" && caras == "2 Caras")
            {
                total = paginas * 6;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            //Oficio 
            // Oficio 1 Cara Bond y Couche
            else if (tamaño == "Oficio" && color == "BN" && papel=="Bond" && caras == "1 Cara") {
                total = paginas * 1;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Oficio" && color == "Color" && papel=="Bond" && caras == "1 Cara")
            {
                total = paginas * 2;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            else if (tamaño == "Oficio" && color == "BN" && papel=="Couche" && caras == "1 Cara") {
                total = paginas * 2;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Oficio" && color == "Color" && papel=="Couche" && caras == "1 Cara")
            {
                total = paginas * 4;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            //Oficio 2 Caras 
            else if (tamaño == "Oficio" && color == "BN" && papel=="Bond" && caras == "2 Caras") {
                total = paginas * 1.50;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Oficio" && color == "Color" && papel=="Bond" && caras == "2 Caras")
            {
                total = paginas * 2.50;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

            else if (tamaño == "Oficio" && color == "BN" && papel=="Couche" && caras == "2 Caras") {
                total = paginas * 3;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }
            else if(tamaño == "Oficio" && color == "Color" && papel=="Couche" && caras == "2 Caras")
            {
                total = paginas * 16;
                pagar = total * cantidad;
                /*document.getElementById('papel').textContent = "Tipo de Papel: " + papel;
                document.getElementById('tamano').textContent = "Tamaño: " + tamaño;
                 document.getElementById('color').textContent = "Color: " + color;
                document.getElementById('caras').textContent = "Lados: " + caras;
                document.getElementById('cantidad').textContent = "Cantidad: " + cantidad;
                document.getElementById('sucursal').textContent = "Recoger en: " + sucursal;*/
                document.getElementById('todalOrden').value = "Total: \$ " + pagar;
                $('#registrar').show();
            }

        }
    });
});

