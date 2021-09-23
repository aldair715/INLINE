<?php
session_start();
if(!isset($_SESSION["ID_USUARIO"]))
{
   header("Location:../../index.php");
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
   <link rel="stylesheet" href="../assets/style.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> 
    
</head>
<body>
<svg style="display:none;">
        <symbol id="logo" viewBox="0 0 140 59">
          <g>
          <path d="M 6.8 57 c 0.2 0 -0.1 0.7 -0.2 0.9 c -0.1 0.2 -0.3 0.4 -0.4 0.5 c -0.1 0.1 -0.4 0.199 -0.5 0.3 c -0.2 0 -0.3 0.1 -0.5 0.1 c -0.1 0 -0.3 0 -0.5 -0.1 c -0.2 0 -0.4 -0.101 -0.5 -0.3 c -0.2 0 -0.4 -0.2 -0.5 -0.4 c -0.1 -0.2 -0.2 -0.5 -0.2 -0.9 V 45 v -0.4 v -10.6 c 0.5 -1 2.5 -2 3.5 0 z" />
            <path d="M 28 42 M 28 57 M 14 57 M 14 42 L 14 57 C 15 58 16 58 17 57 M 28 57 L 25 57 M 25 57 C 26 58 27 58 28 57 L 28 42 M 14 42 C 15 41 16 41 17 42 L 25 54 M 25 54 L 25 48 L 25 42 M 25 42 C 26 41 27 41 28 42 L 25 57 M 17 45 L 17 57 L 14 42 M 17 45 L 25 57 L 25 54 z z" />
            <path d="M 45 55 C 47 56 47 57 45 58 v 0 C 35 58 35 58 35 57 V 43.5 c 0 -0.4 0.1 -0.7 0.2 -0.9 c 0.1 -0.199 0.3 -0.399 0.4 -0.5 c 0.2 -0.1 0.3 -0.199 0.5 -0.199 s 0.3 -0.101 0.5 -0.101 c 0.1 0 0.3 0 0.4 0.101 c 0.2 0 0.3 0.1 0.5 0.199 c 0.2 0.101 0.3 0.301 0.4 0.5 c 0.1 0.2 0.2 0.5 0.2 0.9 v 11.5 z" />
            <path d="M 55 43 v 15 C 54 59 52 59 51 57 L 51 43 C 52 41 54 41 55 43 z z" />
            <path d="M 75 58 M 64 58 M 75 55 L 67 42 C 66 41 65 41 64 42 L 64 58 C 65 59 66 59 67 58 L 67 45 L 75 58 M 78 42 C 77 41 76 41 75 42 L 75 58 C 76 59 77 59 78 58 z" />
            <path d="M 93 52 L 87 52 L 87 56 L 98 56 C 100 57 100 58 98 59 L 84 59 L 84 42 L 98 42 C 100 43 100 44 98 45 L 87 45 L 87 49 L 87 49 L 93 49 M 93 49 C 95 50 95 51 93 52 z z" />
            
          </g>
          <g>
            <g>
              <path fill="#08A6DF" d="M70 32.9c-9.1 0-16.5-7.4-16.5-16.5 0-4.8 2.1-9.3 5.7-12.4.5-.4 1.2-.4 1.6.1.4.5.4 1.2-.1 1.6-3.1 2.7-4.9 6.6-4.9 10.7 0 7.8 6.4 14.2 14.2 14.2s14.2-6.4 14.2-14.2c0-7.8-6.4-14.1-14.2-14.1-1.9 0-3.7.4-5.4 1.1-.6.2-1.3 0-1.5-.6-.2-.6 0-1.3.6-1.5C65.7.4 67.8 0 70 0c9.1 0 16.5 7.4 16.5 16.5S79.1 32.9 70 32.9z" />
            </g>
            <g>
              <path fill="#7C2A8A" d="M70 28.4c-6.6 0-11.9-5.4-11.9-11.9 0-6.6 5.4-11.9 11.9-11.9 5 0 9.5 3.2 11.2 7.9.5 1.3.7 2.6.7 4 0 .6-.5 1.1-1.101 1.1-.6 0-1.1-.5-1.1-1.1 0-1.1-.2-2.2-.601-3.3-1.399-3.8-5-6.4-9.1-6.4-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6c.6 0 1.1.5 1.1 1.1.002.8-.498 1.3-1.098 1.3z" />
            </g>
            <g>
              <path fill="#EC1848" d="M 73 11 L 80 24 M 73 11 C 72 10 71 10 70 11 L 62 24 M 62 24 C 63 25 64 25 65 24 L 70 17 L 73 17 L 70 14 M 80 24 C 79 25 78 25 77 24 L 73 17 L 73 11 z" />
            </g>
          </g>
        </symbol>
        <symbol id="down" viewBox="0 0 16 16">
          <polygon points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38" />
        </symbol>
        <symbol id="users" viewBox="0 0 16 16">
          <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,0,1-5.19-2.32,2.71,2.71,0,0,1,1.7-1,13.11,13.11,0,0,0,1.29-.28,2.32,2.32,0,0,0,.94-.34,1.17,1.17,0,0,0-.27-.7h0A3.61,3.61,0,0,1,5.15,7.49,3.18,3.18,0,0,1,8,4.07a3.18,3.18,0,0,1,2.86,3.42,3.6,3.6,0,0,1-1.32,2.88h0a1.13,1.13,0,0,0-.27.69,2.68,2.68,0,0,0,.93.31,10.81,10.81,0,0,0,1.28.23,2.63,2.63,0,0,1,1.78,1A7,7,0,0,1,8,15Z" />
        </symbol>
        <symbol id="collection" viewBox="0 0 16 16">
          <rect width="7" height="7" />
          <rect y="9" width="7" height="7" />
          <rect x="9" width="7" height="7" />
          <rect x="9" y="9" width="7" height="7" />
        </symbol>
        <symbol id="charts" viewBox="0 0 16 16">
          <polygon points="0.64 7.38 -0.02 6.63 2.55 4.38 4.57 5.93 9.25 0.78 12.97 4.37 15.37 2.31 16.02 3.07 12.94 5.72 9.29 2.21 4.69 7.29 2.59 5.67 0.64 7.38" />
          <rect y="9" width="2" height="7" />
          <rect x="12" y="8" width="2" height="8" />
          <rect x="8" y="6" width="2" height="10" />
          <rect x="4" y="11" width="2" height="5" />
        </symbol>
        <symbol id="comments" viewBox="0 0 16 16">
          <path d="M0,16.13V2H15V13H5.24ZM1,3V14.37L5,12h9V3Z" />
          <rect x="3" y="5" width="9" height="1" />
          <rect x="3" y="7" width="7" height="1" />
          <rect x="3" y="9" width="5" height="1" />
        </symbol>
        <symbol id="pages" viewBox="0 0 16 16">
          <rect x="4" width="12" height="12" transform="translate(20 12) rotate(-180)" />
          <polygon points="2 14 2 2 0 2 0 14 0 16 2 16 14 16 14 14 2 14" />
        </symbol>
        <symbol id="appearance" viewBox="0 0 16 16">
          <path d="M3,0V7A2,2,0,0,0,5,9H6v5a2,2,0,0,0,4,0V9h1a2,2,0,0,0,2-2V0Zm9,7a1,1,0,0,1-1,1H9v6a1,1,0,0,1-2,0V8H5A1,1,0,0,1,4,7V6h8ZM4,5V1H6V4H7V1H9V4h1V1h2V5Z" />
        </symbol>
        <symbol id="trends" viewBox="0 0 16 16">
          <polygon points="0.64 11.85 -0.02 11.1 2.55 8.85 4.57 10.4 9.25 5.25 12.97 8.84 15.37 6.79 16.02 7.54 12.94 10.2 9.29 6.68 4.69 11.76 2.59 10.14 0.64 11.85" />
        </symbol>
        <symbol id="settings" viewBox="0 0 16 16">
          <rect x="9.78" y="5.34" width="1" height="7.97" />
          <polygon points="7.79 6.07 10.28 1.75 12.77 6.07 7.79 6.07" />
          <rect x="4.16" y="1.75" width="1" height="7.97" />
          <polygon points="7.15 8.99 4.66 13.31 2.16 8.99 7.15 8.99" />
          <rect x="1.28" width="1" height="4.97" />
          <polygon points="3.28 4.53 1.78 7.13 0.28 4.53 3.28 4.53" />
          <rect x="12.84" y="11.03" width="1" height="4.97" />
          <polygon points="11.85 11.47 13.34 8.88 14.84 11.47 11.85 11.47" />
        </symbol>
        <symbol id="options" viewBox="0 0 16 16">
          <path d="M8,11a3,3,0,1,1,3-3A3,3,0,0,1,8,11ZM8,6a2,2,0,1,0,2,2A2,2,0,0,0,8,6Z" />
          <path d="M8.5,16h-1A1.5,1.5,0,0,1,6,14.5v-.85a5.91,5.91,0,0,1-.58-.24l-.6.6A1.54,1.54,0,0,1,2.7,14L2,13.3a1.5,1.5,0,0,1,0-2.12l.6-.6A5.91,5.91,0,0,1,2.35,10H1.5A1.5,1.5,0,0,1,0,8.5v-1A1.5,1.5,0,0,1,1.5,6h.85a5.91,5.91,0,0,1,.24-.58L2,4.82A1.5,1.5,0,0,1,2,2.7L2.7,2A1.54,1.54,0,0,1,4.82,2l.6.6A5.91,5.91,0,0,1,6,2.35V1.5A1.5,1.5,0,0,1,7.5,0h1A1.5,1.5,0,0,1,10,1.5v.85a5.91,5.91,0,0,1,.58.24l.6-.6A1.54,1.54,0,0,1,13.3,2L14,2.7a1.5,1.5,0,0,1,0,2.12l-.6.6a5.91,5.91,0,0,1,.24.58h.85A1.5,1.5,0,0,1,16,7.5v1A1.5,1.5,0,0,1,14.5,10h-.85a5.91,5.91,0,0,1-.24.58l.6.6a1.5,1.5,0,0,1,0,2.12L13.3,14a1.54,1.54,0,0,1-2.12,0l-.6-.6a5.91,5.91,0,0,1-.58.24v.85A1.5,1.5,0,0,1,8.5,16ZM5.23,12.18l.33.18a4.94,4.94,0,0,0,1.07.44l.36.1V14.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V12.91l.36-.1a4.94,4.94,0,0,0,1.07-.44l.33-.18,1.12,1.12a.51.51,0,0,0,.71,0l.71-.71a.5.5,0,0,0,0-.71l-1.12-1.12.18-.33a4.94,4.94,0,0,0,.44-1.07l.1-.36H14.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H12.91l-.1-.36a4.94,4.94,0,0,0-.44-1.07l-.18-.33L13.3,4.11a.5.5,0,0,0,0-.71L12.6,2.7a.51.51,0,0,0-.71,0L10.77,3.82l-.33-.18a4.94,4.94,0,0,0-1.07-.44L9,3.09V1.5A.5.5,0,0,0,8.5,1h-1a.5.5,0,0,0-.5.5V3.09l-.36.1a4.94,4.94,0,0,0-1.07.44l-.33.18L4.11,2.7a.51.51,0,0,0-.71,0L2.7,3.4a.5.5,0,0,0,0,.71L3.82,5.23l-.18.33a4.94,4.94,0,0,0-.44,1.07L3.09,7H1.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H3.09l.1.36a4.94,4.94,0,0,0,.44,1.07l.18.33L2.7,11.89a.5.5,0,0,0,0,.71l.71.71a.51.51,0,0,0,.71,0Z" />
        </symbol>
        <symbol id="collapse" viewBox="0 0 16 16">
          <polygon points="11.62 3.81 7.43 8 11.62 12.19 10.09 13.71 4.38 8 10.09 2.29 11.62 3.81" />
        </symbol>
        <symbol id="search" viewBox="0 0 16 16">
          <path d="M6.57,1A5.57,5.57,0,1,1,1,6.57,5.57,5.57,0,0,1,6.57,1m0-1a6.57,6.57,0,1,0,6.57,6.57A6.57,6.57,0,0,0,6.57,0Z" />
          <rect x="11.84" y="9.87" width="2" height="5.93" transform="translate(-5.32 12.84) rotate(-45)" />
        </symbol>
      </svg>
      <header class="page-header">
        <nav>
          <a href="#0" aria-label="forecastr logo" class="logo">
            <svg width="140" height="49">
              <use xlink:href="#logo"></use>
            </svg>
          </a>
          <button class="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
            
                <i class="fas fa-arrow-circle-down"></i>
           
          </button>
          <ul class="admin-menu navbar-nav">
            <li class="menu-heading nav-item dropdown">
              <h3>PACIENTE</h3>
            </li>
            

            <li class="menu-heading nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <i class="fas fa-user-injured"></i>PACIENTE
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#/mostrarPaciente"><i class="fas fa-table"></i>MOSTRAR PACIENTE</a>
                  </div>
            </li>
            <li class="menu-heading nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <i class="fas fa-user-nurse"></i>DOCTOR
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#/mostrarDoctor"><i class="fas fa-table"></i>MOSTRAR DOCTOR</a>
                  </div>
            </li>
            <!--
            <li class="menu-heading nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <i class="fas fa-stethoscope"></i>CONSULTA
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"><i class="fas fa-book-open"></i>REGISTRAR CONSULTA</a>
                    <a class="dropdown-item" href="#"><i class="fas fa-table"></i>MOSTRAR CONSULTA</a>
                  </div>
            </li>
            -->
            <li class="menu-heading nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  <i class="fas fa-tablets"></i>MEDICAMENTO
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#/mostrarMedicamento"><i class="fas fa-table"></i>MOSTRAR MEDICAMENTO</a>
                  </div>
            </li>
            <!--
            <li class="menu-heading">
              <h3>AJUSTES</h3>
            </li>
            <li>
              <a href="#0">
                
                <span>CAMBIAR DATOS PERSONALES</span>
              </a>
            </li>
-->
            
            <li>
              <div class="switch">
                <input type="checkbox" id="mode" checked>
                <label for="mode">
                  <span></span>
                  <span>Dark</span>
                </label>
              </div>
              <button class="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                <svg aria-hidden="true">
                  <use xlink:href="#collapse"></use>
                </svg>
                <span>OCULTAR</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section class="page-content">
        <section class="search-and-user">
          <form>
            <a href="/proyecto_emprendimiento/vista/app/components/indexAdministrador.php" class="btn btn-info">INICIO</a>     
          </form>
          <div class="admin-profile">
            <span class="greeting">HOLA <?php echo $_SESSION['NOMBRE_USUARIO']?></span>
            <div>
              <a href="/proyecto_emprendimiento/controlador/Usuario/CerrarSesion.php" class="btn btn-primary">SALIR</a>
            </div>
          </div>
        </section>
        <section >
         
              <div id="root">     
              </div>
         
         
        </section>
    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
</script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../../index.js" type="module"></script>
    </script>
    <script src="../helpers/nav.js"></script>
    <script>
        let $id=<?php echo $_SESSION['ID_USUARIO']?>,
        $nombre='<?php echo $_SESSION["NOMBRE_USUARIO"]?>';
        $nivel='<?php echo $_SESSION["NIVEL_USUARIO"] ?>';
        sessionStorage.setItem("id",$id);
        sessionStorage.setItem("nombre",$nombre);
        sessionStorage.setItem("nivel",$nivel);
    </script>
</body>
</html>

