<?php
require_once '../php/dbClass.php'; //подключаем файл с классом подключения к БД
$connect = new DBConnection(); //создаём экземпляр класса подключения к БД
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Админка</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link href="../css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
  </head>
  <body>

  	<style type="text/css">
  	body {
		background-color: #FFB6C1;
	}

	th {
		font-size: 1em;
		color: #FF1493;;
		text-shadow: #000 1px 0 0px, #000 0 1px 0px, #000 -1px 0 0px, #000 0 -1px 0px;
	}

	h1 {
		font-size: 6em;
		color: #FF1493;
		text-shadow: #000 2px 0 0px, #000 0 2px 0px, #000 -2px 0 0px, #000 0 -2px 0px;

	}
  	</style>

		<nav class="navbar navbar-light">
		  <div class="container-fluid">
		  	<div class="navbar-header">
			  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="admin.html">ЦВЕТКИ.РФ</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			 	<ul class="nav navbar-nav navbar-right">
					<li><a href="admin.html">Главная</a></li>			
					<li><a href="news.php">Новости</a></li>
					<li><a href="market.php">Магазин</a></li>
					<li><a href="user.php">Пользователи</a></li>
				</ul>
			</div>
		  </div>
		</nav>

		<div class="container" >
		    <h1><strong>Магазин</strong></h1>
			<hr>
				<table class="table-condensed" data-id="market">
			  		<thead>
					    <tr>
					      <th scope="col"><strong>№</strong></th>
					      <th scope="col"><strong>Название</strong></th>
					      <th scope="col"><strong>Описание</strong></th>
					      <th scope="col"><strong>Фото</strong></th>
					      <th scope="col"><strong>Цена</strong></th>
					      <th scope="col"><strong>Действия</strong></th>
					    </tr>
					</thead>

					<tbody id="content">
						<?php
		                  $query = "SELECT * FROM market JOIN images ON market.product_image = images.image_id"; //записываем запрос на выборку данных
		                  $queryResult = $connect->makeUnpreparedQuery($query); //выполняем запрос записываем ответ MySQL в $queryResult
		                  $data = $connect->fetch($queryResult); //данные полученные из MySQL преабоазовываем в ассоциативный массив
		                  for($i = 0, $count = sizeof($data); $i < $count; $i++) // выводим данные в виде строк HTML-таблицы 
		                  {
		                  	echo "
		                  		<tr>
					      		<td scope='row'>{$data[$i]['id']}</td>


					      		<td><input class='form-control' name='product_name' disabled type='text' data-type='s' value='{$data[$i]['product_name']}'></td>

					      		<td><input class='form-control' name='product_descriptions' disabled data-type='s' type='text' value='{$data[$i]['product_descriptions']}' ></td>

					      		<td><img src='{$data[$i]['image']}' data-type='s' alt='{$data[$i]['image']}'></td>

					      		<td><input class='form-control' name='product_price' data-type='i' disabled type='text' value='{$data[$i]['product_price']}'></td>
					      		
					      		<td>
								<div class='action'>
									<i class='fa fa-pencil' aria-hidden='true'></i>
									<i class='fa fa-trash' data-table='market' data-id='{$data[$i]['id']}' aria-hidden='true'></i>
								</div>
								<div class='pencil'>
									<i class='fa fa-check' data-table='market' data-id='{$data[$i]['id']}' aria-hidden='true'></i>
									<i class='fa fa-times' aria-hidden='true'></i>
								</div>
							</td>
					    	</tr>
							    ";                  
		                  }
		                ?>
					</tbody> 
				</table>
				<div class="row"> 
				<div class="col-3">
					<button class="btn btn-primary col-12">Добавить</button>
				</div>
				<div class="hide col-6">
					<button class="btn btn-secondary col-5">Отменить</button>
					<button class="btn btn-success col-5">Сохранить</button>
				</div>
			</div>
		</div>

	    <script src="../js/jquery-3.3.1.min.js"></script>
	    <script src="../js/bootstrap.min.js"></script>
	    <script src="../js/clickIcon.js"></script>
		<script src="../js/add.js"></script>
		<script src="../js/clickIcon.js"></script>
	</body>
</html>