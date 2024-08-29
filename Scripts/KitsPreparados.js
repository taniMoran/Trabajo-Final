$(document).ready(function() {
    function filterProducts(category) {
        if (category === 'all') {
            $('.product-item').show();
        } else {
            $('.product-item').hide();
            $('.product-item[category="' + category + '"]').show();
        }
        // Ocultar el menú
        $('.botonestoggler').addClass('hidden-menu');
        $('#check').prop('checked', false); // Desmarcar el checkbox para ocultar el menú
    }

    $('.categoryItem, .itemstoggler').click(function() {
        var catProduct = $(this).attr('category');
        filterProducts(catProduct);
    });
});