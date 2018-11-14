$("#accept").hide();
$("#cancel").hide();
$("#addProduct").hide();

$('#edit').click(function(){
	$('#product_name').removeAttr("disabled");
	$('#product_descriptions').removeAttr("disabled");
	$('#product_image').removeAttr("disabled");
	$('#product_price').removeAttr("disabled");

  	$("#edit").hide();
  	$("#delete").hide();
  	$("#accept").show();
  	$("#cancel").show();
});

$('#accept').click(function(){
	$('#product_name').attr("disabled", true);
	$('#product_descriptions').attr("disabled", true);
	$('#product_image').attr("disabled", true);
	$('#product_price').attr("disabled", true);

  	$("#accept").hide();
  	$("#cancel").hide();
  	$("#edit").show();
  	$("#delete").show();
});

$('#cancel').click(function(){
	$('#product_name').attr("disabled", true);
	$('#product_descriptions').attr("disabled", true);
	$('#product_image').attr("disabled", true);
	$('#product_price').attr("disabled", true);

	$("#accept").hide();
  	$("#cancel").hide();
  	$("#edit").show();
  	$("#delete").show();
});

$('#add').click(function(){
	$("#editProduct").hide();
  	$("#addProduct").show();

});

$('#cancelAdd').click(function(){
	$("#editProduct").show();
  	$("#addProduct").hide();
});

$('#acceptAdd').click(function(){
  	$("#addProduct").hide();
  	$("#editProduct").show();
  	
});

$('#hideAdd').click(function(){
	$("#newAdd").remove();
	$("#editProduct").show();
});
