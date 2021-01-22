jQuery(function($){

    // будет работать, если была нажата кнопка удаления 
    $(document).on('click', '.delete-product-button', function(){
        // получение ID товара 
        var product_id = $(this).attr('data-id');

		
		// bootbox для подтверждения во всплывающем окне 
bootbox.confirm({

    message: "<h4>Вы уверены? Товар будет удален.</h4>",
    buttons: {
        confirm: {
            label: '<span class="glyphicon glyphicon-ok"></span> Да',
            className: 'btn-danger'
        },
        cancel: {
            label: '<span class="glyphicon glyphicon-remove"></span> Не совсем',
            className: 'btn-primary'
        }
    },
    callback: function (result) {
        // здесь будет запрос на удаление 
		
		if (result==true) {

    // отправим запрос на удаление в API / удаленный сервер 
    $.ajax({
        url: "http://localhost:8080/api/objects/product/delete.php",
        type : "POST",
        dataType : 'json',
        data : JSON.stringify({ id: product_id }),
        success : function(result) {

            // покажем список всех товаров 
            showProducts();
        },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
    });

}
		
    }
});
		
		
    });
});