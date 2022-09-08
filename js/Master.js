$(document).ready(function(){
    
    AgregarMenu();
    
    AgregarHeader();

    $('.click').click(function(){
      $('.popup_box').css("display", "block");
    });
    $('.btn1').click(function(){
      $('.popup_box').css("display", "none");
    });
    $('.btn2').click(function(){
      $('.popup_box').css("display", "none");
      alert("Registro Borrado Permanentemente.");
    });
});


function AgregarMenu(){
  var menu = document.getElementById("Menu");
  menu.innerHTML = '<h1 class="visually-hidden">Sidebars examples</h1>'+
  
     '<div class="collapse show" id="ccollapse"><a href="../forms/main.html" class="link-dark d-inline-flex text-decoration-none rounded">INICIO</a></div>'+
     '<div class="border-top my-3"></div>'+
    
      '<ul class="list-unstyled ps-0">'+
  
    '<li class="mb-1">'+
    //MENÚ DE MI PERFIL
    '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#miperfil-collapse" aria-expanded="false">'+
        'MI PERFIL'+
      '</button>'+
      //Parte desplegable (Collapse show)
      '<div class="collapse" id="miperfil-collapse">'+
        '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
          '<li><a href="../forms/1. MI PERFIL_Preguntas.html" class="link-dark d-inline-flex text-decoration-none rounded">Mis Preguntas</a></li>'+
    '<li><a href="../forms/1.4 Cambio_Contra.html" class="link-dark d-inline-flex text-decoration-none rounded">Cambio de Contraseña</a></li>'+
    '<li><a href="../forms/1.5 Editar usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Editar Usuario</a></li>'+
          '<li><a href="../forms/1.6 Cerrar sesion.html" class="link-dark d-inline-flex text-decoration-none rounded">Cerrar Sesión</a></li>'+   
    '</ul>'+
      '</div>'+
    '</li>'+

    //MENÚ DE CONTABILIDAD
    '<li class="mb-1">'+
      '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#conta-collapse" aria-expanded="false">'+
        'CONTABILIDAD'+
      '</button>'+
      '<div class="collapse" id="conta-collapse">'+
        '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
          '<li><a href="../forms/2. CONTABILIDAD_categoria.html" class="link-dark d-inline-flex text-decoration-none rounded">Categoría Contable</a></li>'+
          '<li><a href="../forms/3. CONTABILIDAD_catalogo.html" class="link-dark d-inline-flex text-decoration-none rounded">Catálogo de Cuentas</a></li>'+
          '<li><a href="../forms/4. CONTABILIDAD_subcuenta.html" class="link-dark d-inline-flex text-decoration-none rounded">Subcuentas</a></li>'+
          '<li><a href="../forms/5. CONTABILIDAD_periodo.html" class="link-dark d-inline-flex text-decoration-none rounded">Período Contable</a></li>'+
          '<li><a href="../forms/6. CONTABILIDAD_estado.html" class="link-dark d-inline-flex text-decoration-none rounded">Estado de Libro Diario</a></li>'+
          '<li><a href="../forms/7. CONTABILIDAD_libro diario.html" class="link-dark d-inline-flex text-decoration-none rounded">Libro Diario</a></li>'+
          '<li><a href="../forms/8. CONTABILIDAD_libro mayor.html" class="link-dark d-inline-flex text-decoration-none rounded">Libro Mayor</a></li>'+
    '</ul>'+
      '</div>'+
    '</li>'+

    //MENÚ DE REPORTES
    '<li class="mb-1">'+
      '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#reporte-collapse" aria-expanded="false">'+
        'REPORTES'+
      '</button>'+
      '<div class="collapse" id="reporte-collapse">'+
        '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
          '<li><a href="../forms/9. REPORTE_Balance General.html" class="link-dark d-inline-flex text-decoration-none rounded">Balance General</a></li>'+
          '<li><a href="../forms/10. REPORTE_Estado Resultado.html" class="link-dark d-inline-flex text-decoration-none rounded">Estado de Resultado</a></li>'+
          '<li><a href="../forms/11. REPORTE_Ingresos y gastos.html" class="link-dark d-inline-flex text-decoration-none rounded">Ingresos y Egresos</a></li>'+
        '</ul>'+
      '</div>'+
    '</li>'+
    
    //MENÚ DE SEGURIDAD
    '<li class="mb-1">'+
      '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#seguridad-collapse" aria-expanded="false">'+
        'SEGURIDAD'+
      '</button>'+
      '<div class="collapse" id="seguridad-collapse">'+
        '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
          '<li><a href="../forms/13. SEGURIDAD_usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Usuario</a></li>'+
          '<li><a href="../forms/12. SEGURIDAD_gestión usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Gestión de Usuario</a></li>'+
          '<li><a href="../forms/14. SEGURIDAD_preguntas.html" class="link-dark d-inline-flex text-decoration-none rounded">Preguntas</a></li>'+
          '<li><a href="../forms/15. SEGURIDAD_pregs usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Preguntas de Usuario</a></li>'+
          '<li><a href="../forms/16. SEGURIDAD_parámetros.html" class="link-dark d-inline-flex text-decoration-none rounded">Parámetros</a></li>'+
          '<li><a href="../forms/17. SEGURIDAD_objetos.html" class="link-dark d-inline-flex text-decoration-none rounded">Objetos</a></li>'+
          '<li><a href="../forms/18. SEGURIDAD_permisos.html" class="link-dark d-inline-flex text-decoration-none rounded">Permisos</a></li>'+
          '<li><a href="../forms/19. SEGURIDAD_roles.html" class="link-dark d-inline-flex text-decoration-none rounded">Roles</a></li>'+
          '</ul>'+
      '</div>'+
    '</li>'+
  '</ul>'
}



function AgregarFooter(){
    var menu = document.getElementById("Pie");
    menu.innerHTML = '<div></div>'
}

function PupUp(){
  $('.click').click(function(){
    $('.popup_box').css("display", "block");
  });
  $('.btn1').click(function(){
    $('.popup_box').css("display", "none");
  });
  $('.btn2').click(function(){
    $('.popup_box').css("display", "none");
    alert("Registro Borrado Permanentemente.");
  });
}

function AgregarHeader(){
  var menu = document.getElementById("Cabecera");
    menu.innerHTML = '<header>'+
    '<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #a80000">'+
        '<div class="container-fluid">'+
          '<a class="navbar-brand" href="#">'+
            '<img src="../images/burridogs_logo.png" class="rounded" alt="" width="120" height="70" class="d-inline-block align-text-mid">'+
            '   PIERDA LA PENA, ENTRELE SIN MIEDO'+
          '</a>'+
          //'<span class="navbar-toggler-icon"></span>'+
          '</button>'+
          '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav mr-auto">'+
              '<li class="nav-item dropdown">'+
                '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                  '<a class="dropdown-item" href="/ListaMats_Lista.html">Lista Materiales</a>'+
                  '<a class="dropdown-item" href="/Metd_pago_lista.html">Metodo Pago</a>'+
                  '<a class="dropdown-item" href="/Unidades_medida_lista.html">Unidades Medida</a>'+
                '</div>'+
              '</li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
        '</nav>'+
'</header>'
}
