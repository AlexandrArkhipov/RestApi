
jQuery(function($){

    // показать список товаров при первой загрузке 
    showProducts();
	$(document).on('click', '.read-products-button', function(){
    showProducts();
});
});

// здесь будет метод showProducts()

// функция для показа списка товаров 
function showProducts(){
	
	// получить список товаров из API 
$.getJSON("http://localhost:8080/api/objects/product/read.php", function(data){
	
	readProductsTemplate(data, "");
	// html for listing products 


// изменяем заголовок страницы 
changePageTitle("Все товары");

});

}
// при нажатии кнопки 

