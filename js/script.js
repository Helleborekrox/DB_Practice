$(document).on('click', '.edit-button', function() {
	let line = $(this).parent().parent().parent();
	let inputs = line.find('input[disabled]');
	inputs.prop('disabled', false);
	// line.find('.icons-ed-del').hide();
	// line.find('.icons-сonf-canc').show();
});

$(document).on('click', '.cancel-button', function() {
	let line = $(this).parent().parent().parent();
	let inputs = line.find('input');
	inputs.prop('disabled', true);
	line.find('.icons-ed-del').show();
	line.find('.icons-сonf-canc').hide();
});

$(document).on('click', '.showadd-button', function() {
	$('#showTable').hide();
	$('#addContainer').show();
});

$(document).on('click', '.add-button', function(e) {
	e.preventDefault();
	let form = $(this).parent();
	let inputs = form.find('input');
	let fields = [];
	let values = [];
	let types = "";
	let action = 'insert';
	let table = 'market';
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
			location.reload();
		},
		error: function(error) {
			console.log(error);
		}
	})

});

// e.preventDefault(); 
// let form = $(this).parent(); 
// let inputs = $(this).parents(".hidden-container").find("input") 
// let values = [];; 
// let fields = []; 
// let types = ""; 
// let action = 'delete'; 
// let table = 'pharmacy'; 
// let id = $(this).parents(".input-container").find(".id_input").val(); 
// console.log(id); 
// inputs.each(function() { 
// fields.push($(this).attr('name')); 
// values.push($(this).val()); 
// types += $(this).attr('data-type'); 
// })

 $(document).on('click', '.delete-button', function() {
	let form = $(this).parent().parent().parent();
	let inputs = form.find('input');
	let values = [];
	let types = 'i';
	let id = $(this).parents('.tata').find('th');
	console.log(id.val());
	let action = 'delete';
	let table = 'market';
	let del = $(this).parent().parent();
	console.log(del);
	values.push($(this).attr('data-id'));

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
		},
		error: function(error) {
			console.log(error);
		}
	})
});

 // $(document).on('click', '.delete-button', function() {
 // 	let tr = $(this).parent().parent();
 // 	tr.remove();
 // 	console.log('dvsdvsd');
 // })