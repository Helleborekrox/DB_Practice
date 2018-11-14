$(".btn-primary").click(function(){
	let data = $('table').attr('data-id');
	let lastId = $('tbody tr:last-child>td:first-child').html();
	lastId = parseInt(lastId);
	lastId++;
	if(data === 'market'){
		$('tbody').append('<tr class="add"><td scope="row"></td><td><input name="product_name" type="text" data-type="s" class="form-control"></td><td><input name="product_descriptions" type="text" data-type="s" class="form-control" ></td><td><input name="product_image" type="text" data-type="s" class="form-control" ></td><td><input name="product_price" type="number" data-type="s" class="form-control" ></td><td><div class="action"><i class="fa fa-pencil" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></div><div class="pencil" style="display: none;"><i class="fa fa-times" aria-hidden="true"></i></div><div class="blockAdd"><i data-table="market" class="fa fa-plus"></i></div></td></tr>');
	} 

	if(data === 'user'){
		$('tbody').append('<tr class="add"><td scope="row"></td><td><input name="name" type="text" data-type="s" class="form-control"></td><td><input name="password" type="text" data-type="s" class="form-control" ></td><td><input name="user_image" type="text" data-type="s" class="form-control" ></td><td><input name="email" type="text" data-type="s" class="form-control" ></td><td><div class="action"><i class="fa fa-pencil" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></div><div class="pencil" style="display: none;"><i class="fa fa-times" aria-hidden="true"></i></div><div class="blockAdd"><i data-table="user" class="fa fa-plus"></i></div></td></tr>');
	} 

	if(data === 'news'){
		$('tbody').append('<tr class="add"><td scope="row"></td><td><input name="news_title" type="text" data-type="s" class="form-control"></td><td><input name="news_text" type="text" data-type="s" class="form-control" ></td><td><input name="news_image" type="text" data-type="s" class="form-control" ></td><td><div class="action"><i class="fa fa-pencil" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></div><div class="pencil" style="display: none;"><i class="fa fa-times" aria-hidden="true"></i></div><div class="blockAdd"><i data-table="news" class="fa fa-plus"></i></div></td></tr>');
	} 
 
	$(".add .action").hide();
	$(".hide").show();
});
$(".btn-secondary").click(function(){
	$('.add').remove();
	$(".hide").hide();
});

$(document).on('click', '.fa-plus', function(e) {
	e.preventDefault();
	$(".fa-plus").hide();
	let td = $(this).parent().parent().parent();
	let inputs = td.find('input');
	let fields = [];
	let values = [];
	let types = "";
	let action = 'insert';
	let table = $(this).attr('data-table');
	inputs.each(function() {
		fields.push($(this).attr('name'));
		values.push($(this).val());
		types += $(this).attr('data-type');
	})
	$.ajax({
		url: '../php/CRUD.php',
		type: 'POST',
		data: {
			table: table,
			action: action,
			fields: JSON.stringify(fields),
			values: JSON.stringify(values),
			types: types,
		},
		success: function(response) {
			console.log(response);
			$("input").attr("disabled", "disabled");
			$("tr").removeAttr('class');
			$(".action").show();
			$(".hide").hide();
		},
		error: function(error) {
			console.log(error);
		}
	})
});