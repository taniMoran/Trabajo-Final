$(document).ready(function(){
    alert("holiss");

    
    $('.categoryItem').click(function(){
        var catProduct = $(this).attr('category');
        // OCULTANDO PRODUCTOS
        $('.product-item').hide();

        // MOSTRANDO PRODUCTOS
        $('.product-item[category="'+catProduct+'"]').show();   


    });

    $('.categoryItem[category="all"]').click(function(){

        $('.product-item').show();

    })

});