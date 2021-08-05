export function menu()
{
    const D=document,
    $menu=D.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML=`
        <a href="#">INICIO</a>
        <a href="#/search_doctor">BUSCAR DOCTOR</a>
        <a href="#/search_especialidad">BUSCAR ESPECIALIDAD</a>
        <a href="#/mostrarFormulario">Formulario</a>
        <a href="#/registrarMedicamento">Registrar Medicamento</a>
        <a href="#/registrarReceta">Registrar Receta</a>
        <a href="#/registrarDoctor">Registrar Doctor</a>
        <a href="#/registrarPaciente">Registrar Paciente</a>
        <a href="#/registrarUsuario">Registrar Usuario</a>
        <a href="#/registrarAntecedente">Registrar Antecedente</a>
    `;
    return $menu;
}