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
});