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
    '<a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">'+
      //'<svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>'+
      //'<span class="fs-5 fw-semibold">EnigmaPOS</span>'+
    '</a>'+
    '<ul class="list-unstyled ps-0">'+
    
    //INICIO
    '</button>'+
    '<div class="collapse show" id="dashboard-collapse">'+
      '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
        '<li><a href="../forms/main.html" class="link-dark d-inline-flex text-decoration-none rounded">INICIO</a></li>'+
       
    //MI PERFIL
    '<li class="mb-1">'+
    '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">'+
      
    'MI PERFIL'+
    '</button>'+
    '<div class="collapse show" id="dashboard-collapse">'+
      '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
        '<li><a href="../forms/Preguntas.html" class="link-dark d-inline-flex text-decoration-none rounded">Mis preguntas</a></li>'+
        '<li><a href="../forms/Cambio_Contra.html" class="link-dark d-inline-flex text-decoration-none rounded">Cambio de contraseña</a></li>'+
        '<li><a href="../forms/editar_usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Editar usuario</a></li>'+
        '<li><a href="../forms/cerrar_sesion.html" class="link-dark d-inline-flex text-decoration-none rounded">Cerrar sesion</a></li>'+
'</ul>'+
    '</div>'+
  '</li>'+
    
    
  //CONTABILIDAD
    '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">'+
          'CONTABILIDAD'+
        '</button>'+
        '<div class="collapse show" id="home-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="../forms/conta_categoria.html" class="link-dark d-inline-flex text-decoration-none rounded">Categoría contable</a></li>'+
			'<li><a href="../forms/conta_catalogo.html" class="link-dark d-inline-flex text-decoration-none rounded">Catálogo de cuentas</a></li>'+
			'<li><a href="../forms/conta_subcuenta.html" class="link-dark d-inline-flex text-decoration-none rounded">Subcuentas</a></li>'+
            '<li><a href="../forms/conta_periodo.html" class="link-dark d-inline-flex text-decoration-none rounded">Período contable</a></li>'+
            '<li><a href="../forms/conta_estadolb.html" class="link-dark d-inline-flex text-decoration-none rounded">Estado de libro diario</a></li>'+
			'<li><a href="../forms/conta_librodiario.html" class="link-dark d-inline-flex text-decoration-none rounded">Libro diario</a></li>'+
			'<li><a href="../forms/conta_libromayor.html" class="link-dark d-inline-flex text-decoration-none rounded">Libro mayor</a></li>'+
		  '</ul>'+
        '</div>'+
      '</li>'+
      


      //REPORTES
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">'+
          'REPORTES'+
        '</button>'+
        '<div class="collapse show" id="orders-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="../forms/reporte_venta_resumen.html" class="link-dark d-inline-flex text-decoration-none rounded">Balance general</a></li>'+
		      	'<li><a href="../forms/reporte_venta_cajero.html" class="link-dark d-inline-flex text-decoration-none rounded">Estado de resultado</a></li>'+
            '<li><a href="../forms/reporte_venta_producto.html" class="link-dark d-inline-flex text-decoration-none rounded">Ingresos y gastos</a></li>'+
            '</ul>'+
        '</div>'+
      '</li>'+

//SEGURIDAD
'<li class="mb-1">'+
'<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">'+
  
'SEGURIDAD'+
'</button>'+
'<div class="collapse show" id="dashboard-collapse">'+
  '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
    '<li><a href="../forms/seg_usuario.html" class="link-dark d-inline-flex text-decoration-none rounded">Usuario</a></li>'+
    '<li><a href="../forms/articulo_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Gestión de usuario</a></li>'+
    '<li><a href="../forms/lista-materiales.html" class="link-dark d-inline-flex text-decoration-none rounded">Preguntas</a></li>'+
    '<li><a href="../forms/Unidades_medida_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Preguntas de usuario</a></li>'+
    '<li><a href="../forms/ingresar_mercaderia.html" class="link-dark d-inline-flex text-decoration-none rounded">Parámetros</a></li>'+
    '<li><a href="../forms/salida_mercaderia.html" class="link-dark d-inline-flex text-decoration-none rounded">Objetos</a></li>'+
    '<li><a href="../forms/salida_mercaderia.html" class="link-dark d-inline-flex text-decoration-none rounded">Permisos</a></li>'+
    '<li><a href="../forms/salida_mercaderia.html" class="link-dark d-inline-flex text-decoration-none rounded">Roles</a></li>'+
'</ul>'+
'</div>'+
'</li>'


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
    '<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #e43e3e ;">'+
        '<div class="container-fluid">'+
          '<a class="navbar-brand" href="#">'+
            '<img src="../images/burridogs_logo.png" alt="" width="130" height="70" class="d-inline-block align-text-mid">'+
            'Burridogs'+
          '</a>'+
          
            '<span class="navbar-toggler-icon"></span>'+
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
