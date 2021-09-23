export function menu()
{
    const D=document,
    $menu=D.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML=`
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">

    <a class="navbar-brand" href="#">INLINE</a>
  
    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
         <a href="#">INICIO</a>
        </li>
        <li class="nav-item">
          <a href="#/search_doctor">BUSCAR DOCTOR</a>
        </li>
      
        <li class="nav-item">
          
        </li>

        <li class="nav-item">
          <a href="#/registrarReceta">Registrar Receta</a>
        </li>
        
        <li class="nav-item">
          <a href="#/registrarAntecedente">Registrar Antecedente</a>
        </li>

       
        <li class="nav-item">
          <a href="#/mostrarAntecedente">Mostrar Paciente</a>
        </li>
      </ul>
    </div>
  </nav>  
    `;
    return $menu;
}