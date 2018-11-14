$('.pencil').hide();
$(document).on("click", ".fa-pencil", function (){
	tr = $(this).parent().parent().parent();
	tr.find("input[disabled]").removeAttr("disabled");
	tr.find(".action").hide();
	tr.find(".pencil").show();
});
$(document).on("click", ".fa-times", function(){
	tr = $(this).parent().parent().parent();
	tr.find("input").attr("disabled", "disabled");
	tr.find(".action").show();
	tr.find(".pencil").hide();
});
$(document).on("click", ".fa-check", function(){
	tr = $(this).parent().parent().parent();
	let inputs = tr.find('input');
	let values = [];
	let fields = [];
	let types = '';
	let action = 'update';
	let table = $(this).attr('data-table');
	let id = $(this).attr('data-id');
	console.log(id);
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
			id: id,
			fields: JSON.stringify(fields),
			values: JSON.stringify(values),
			types: types,
		},
		success: function(response) {
			console.log(response);
			tr.find("input").attr("disabled", "disabled");
			tr.find(".action").show();
			tr.find(".pencil").hide();
		},
		error: function(error) {
			console.log(error);
		}
	})
});
$(document).on("click", ".fa-trash", function(){
	tr = $(this).parent().parent().parent();
	let inputs = tr.find('input');
	let values = [];
	let types = 'i';
	let action = 'delete';
	let table = $(this).attr('data-table');
	let id = $(this).attr('data-id');
	$.ajax({
		url: '../php/CRUD.php',
		type: 'POST',
		data: {
			table: table,
			action: action,
			id: id,
			types: types,
		},
		success: function(response) {
			console.log(response);
			tr.remove();
		},
		error: function(error) {
			console.log(error);
		}
	})
});
	

	

