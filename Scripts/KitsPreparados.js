<<<<<<< HEAD
$(document).ready(function(){
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

=======
$(document).ready(function() {
    function filterProducts(category) {
        if (category === 'all') {
            $('.product-item').show();
        } else {
            $('.product-item').hide();
            $('.product-item[category="' + category + '"]').show();
        }

        $('.botonestoggler').addClass('hidden-menu');
        $('#check').prop('checked', false);
    }

    $('.categoryItem, .itemstoggler').click(function() {
        var catProduct = $(this).attr('category');
        filterProducts(catProduct);
    });
>>>>>>> d077e167c702b43c8569bece54eb938d6a141908
});