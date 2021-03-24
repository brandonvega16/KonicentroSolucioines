<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konicentro</title>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="shortcut icon" type="image/png" href="https://d1cp0za8t1s5w6.cloudfront.net/ccd9c0c8-b2aa-44e6-a1cb-b68854354a18/favicon.ico" />
    <link rel="stylesheet" href="../css/style.css">

    <!-- CSS -->
  <link rel="stylesheet" href="../librerias/alertifyjs/css/alertify.min.css" />
  <!-- Default theme -->
  <link rel="stylesheet" href="../librerias/alertifyjs/css/themes/default.min.css" />
  <!-- Semantic UI theme -->
  <link rel="stylesheet" href="../librerias/alertifyjs/css/themes/semantic.min.css" />
  <!-- Bootstrap theme -->
  <link rel="stylesheet" href="../librerias/alertifyjs/css/themes/bootstrap.min.css" />
</head>

<body>

    <a href="#" class="scrolltop" id="scroll-top">
        <i class='bx bx-chevron-up'></i>
    </a>

    <header class="l-header scroll-header" id="header">
        <nav class="nav bd-container">
            <a href="#" class="nav__logo"><img
                    src="https://d1cp0za8t1s5w6.cloudfront.net/ccd9c0c8-b2aa-44e6-a1cb-b68854354a18/img/konicentrologo.955dd0b7.png"
                    style="width: 120px;" alt=""></a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="../index.html" class="nav__link active-link">Home</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">Konicentro Digital</a></li>

                    <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
                </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>
        </nav>
    </header>

    <main class="l-main">

        <!--Home-->
        <section class="home" id="home">
            <div class="home-container bd-container bd-grid">
                <div class="home__data">
                    <h1 class="home__title" style="margin-top: 70px;">Konicentro Digital</h1>
                    <h2 class="home__subtitle">Imprime facil, rapido<br> y sin filas</h2>
                    <!--<a href="#" class="button">View Menu</a>-->
                </div>

                <img src="../img/printer.gif" class="home__img" alt="">

            </div>
        </section>


        <!--About-->
        <section class="about section bd-container" id="about">
            <div class="about__container bd-grid">
                <div class="about__data">
                    <span class="section-subtitle">Sube tu Archivo</span>
                    <form id="frmArticulos" action="#" method="POST">
                        <input class="form"  type="file" name="archvivo" id="archvivo">
                        <input class="form" name="nombre" id="nombre" type="text" name="" id="" placeholder="Nombre">
                        <input class="form" name="telefono" id="telefono" type="number" name="" id="" placeholder="Telefono">

                        <select class="form-select" id="Stamano" name="Stamano" aria-label="Default select example">
                            <option selected>Selecionar Tamaño de Papel</option>
                            <option value="Carta">Carta</option>
                            <option value="Oficio">Oficio</option>
                        </select>

                        <select class="form-select" id="Spapel" name="Spapel" aria-label="Default select example">
                            <option selected>Selecionar Tipo de Papel</option>
                            <option value="Bond">Bond</option>
                            <option value="Couche">Couche</option>
                        </select>

                        <select class="form-select" id="Scaras" name="Scaras" aria-label="Default select example">
                            <option selected>Selecionar Lados</option>
                            <option value="1 Cara">1 Lado</option>
                            <option value="2 Caras">2 Lados</option>
                        </select>

                        <select class="form-select" id="Scolor" name="Scolor" aria-label="Default select example">
                            <option selected>Selecionar Color / BN</option>
                            <option value="Color">Color</option>
                            <option value="BN">BN</option>
                        </select>

                        <select class="form-select" id="Ssucursal" name="Ssucursal"  aria-label="Default select example">
                            <option selected>Selecionar Sucursal</option>
                            <option value="Independencia">Independencia</option>
                            <option value="Gonzalez Ortega">Gonzalez Ortega</option>
                            <option value="Tijuana">Tijuana</option>
                            <option value="Ensenada">Ensenada</option>
                        </select>

                        <input class="form" id="Icantidad" name="Icantidad" type="number" name="" id="" placeholder="Cantidad">

                        <input id="todalOrden" name="todalOrden" readonly class="form" type="text" placeholder="Total" />

                        <span class=" btnpdf " id="cargar">Cargar</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span class=" btnpdf " id="registrar">Enviar</span>
                        
                    </form>
                </div>

                <div class="about__img">
                    &nbsp; &nbsp; 
                    <button class="btnpdf " id="prev">Previous</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button class="btnpdf " id="next">Next</button>
                    
                    <br><br>
                    &nbsp; &nbsp;
                    <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
                    <canvas id="the-canvas" width="200px" height="300px"></canvas>
                </div>
            </div>
        </section>



    </main>


    <footer class="footer section bd-container">
        <div class="footer__container bd-grid">
            <div class="footer__content">
                <a href="#" class="footer__logo">Konicentro Soluciones</a>
                <span class="footer__description">Centro de Impresion</span>

                <div>
                    <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                </div>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">Direccion</h3>
                <ul>
                    <li>Mexicali - Baja California</li>
                    <li>Cazl. Independencia #2082</li>
                    <li>5 56 09 46</li>
                    <li>isoluciones@konicentro.cc</li>
                </ul>
            </div>
        </div>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/index.js"></script>
    <script src="../js/jquery-3.5.1.js"></script>
    <script src="../librerias/alertifyjs/alertify.js"></script>
    <script src="../js/archivos.js"></script>
    
</body>

</html>