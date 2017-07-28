//  $(document).ready(function(){});

// Color de fondo

$('#colorbutton').click(function(){
  $( 'body' ).css('background-color', $('#bgcolor').val());
});

// Calcular IMC

var calcularIMC = function(peso, estatura){
return peso / (estatura * estatura);
}

var interpretarIMC = function(peso, estatura){
var imc = calcularIMC(peso, estatura);
  if (imc >= 25){
    return "red";
    } else if (imc > 19) {
    return "green";
    } else {
    return "yellow";
    }
  }

  $('#botonimc').click(function(){
    var altura = $('#altura').val();
    var peso = $('#peso').val();
    var resultado = calcularIMC(peso, altura);
    var color = interpretarIMC(peso,altura);
    var text_html = '<p style="color:' + color + '">Tu IMC es: "' + resultado.toFixed(0) +
     '"</p>';
    $('#resultadoimc').html(text_html);
  })

  // Calcul de iva

  $('#resultadoiva').click(function(){
    var calculo = $("#siniva").val()*1.19;
    $('#coniva').val( '$ ' + calculo);
  });

  // Nombre y apellido

  $('#name').on('input', function(){
    var resultado = $(this).val() + ' ' + $('#lastname').val()
  $('#resultadocompleto').val(resultado);
  });

  $('#lastname').on('input', function(){
    var resultado = $('#name').val() + ' ' + $(this).val()
    $('#resultadocompleto').val(resultado)
  });
