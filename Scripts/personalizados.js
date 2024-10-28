$(document).ready(function() {
    // Ocultar todos los mates excepto el primero que está visible por defecto
    $(".mate1").hide();
    $(".mate1").first().show();  // Muestra el primer mate por defecto
    $(".mombi").hide();
    $(".bombi").first().show();  // Muestra el primer mate por defecto
  
    // Manejar clics en los logos de mates
    $(".Tipo").click(function() {
      // Obtener el índice del logo seleccionado
      var index = $(this).index();
  
      // Ocultar todos los mates
      $(".mate1").hide();
  
      // Mostrar el mate correspondiente al logo seleccionado
      $(".mate1").eq(index).show();
    }); 
    $(".bombilla").click(function() {
      
      var index = $(this).index();       
      $(".bombi").hide();       
      $(".bombi").eq(index).show();
      
    });

  });
  