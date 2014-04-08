function loadListOfProducts() {
	$('#products').empty();
	
	$.get("/products", function(products) {
		$('#products').append('<table class="table table-striped table-bordered table-condensed">' +
							  '<tr class="success">' +
							  '<th>Id</th><th>Product name</th><th>Description</th><th>Cost</th><th>Rrp</th><th></th>' +
						  	  '</tr>' +
						  	  '</table>');
		
		$.each(products, function(arrayIndex, product) {
			var html = '<tr>' +
			  '<td><a href="/products/' + product.id + '">' + product.id + '</a></td>' +
			  '<td>' + product.productName + '</td>' +
			  '<td>' + product.description + '</td>' +
			  '<td>' + product.cost + '</td>' +
			  '<td>' + product.rrp + '</td>' +
			  '<td class="text-center">' +
			  '<div class="btn-group">' +
			  '<button type="button" class="btn btn-warning btn-xs update-product" data-product-id="' + product.id + '">' +
			  'update' +
			  '</button>' +
			  '<button type="button" class="btn btn-danger btn-xs delete-product" data-product-id="' + product.id + '">' +
			  'delete' +
			  '</button>' +
			  '</div>' +
			  '</td>' +
			  '</tr>';
			
			var element = $(html);
			
			$('tbody').append(element);
			$(element.find(".update-product").data("product", product));
			$(element.find(".delete-product").data("product", product));
		});
		
		$('.update-product').click(function() {
			var button = $(this);
			var product = button.data('product');
			var productName = prompt("Update product name", product.productName);
			var description = prompt("Update description", product.description);
			var cost = prompt("Update cost", product.cost);
			var rrp = prompt("Update rrp", product.rrp);
			var u = confirm("Do you want to update this product?");
			
			if(u === true) {
				$.ajax({
					url: '/products/' + product.id,
					type: 'PUT',
					data: {
						productName: productName,
						description: description,
						cost: cost,
						rrp: rrp
					}
				})
				.always(loadListOfProducts);
			}
		});
		
		$('.delete-product').click(function() {
			var button = $(this);
			var product = button.data('product');
			var d = confirm("Do you want to delete this product?");
			
			if(d === true) {
				$.ajax({
					url: '/products/' + product.id,
					type: 'DELETE'
				})
				.always(loadListOfProducts);
			}
		});
	});
}

function insertNewProduct() {
	$('#create-new-product').click(function() {
		var productName = prompt("Insert product name");
		var description = prompt("Insert description");
		var cost = prompt("Insert cost");
		var rrp = prompt("Insert rrp");
		var c = confirm("Do you want to insert this product?");
		
		if(c === true) {
			$.ajax({
				url: '/products',
				type: 'PUT',
				data: {
					productName: productName,
					description: description,
					cost: cost,
					rrp: rrp
				}
			})
			.always(loadListOfProducts);
		}
	});
}