<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="/">
	<link rel="icon" href="images/favicon.svg" type="image/x-icon" /> 
	<link rel="shortcut icon" href="images/favicon.svg" type="image/x-icon" />	
    <link rel="stylesheet" href="css/main.bundle.css" type="text/css" media="all" />
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
	<link rel="stylesheet" href="css/style.css" />
	<link rel="stylesheet" href="css/swiper-bundle.min.css">
	<script src="js/swiper-bundle.min.js"></script>
	<title><?=$title?></title>
	<meta name="description" content="<?=$description?>" />
	<meta name="keywords" content= "" />
</head>
<body class="<?=htmlspecialchars($pageClass ?? '', ENT_QUOTES, 'UTF-8')?>">
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="mbl-menu">
			<div class="mbl-close">
				<div class="mbl-cl-icon"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Закрыть меню"><i class="fal fa-times" aria-hidden="true"></i></button></div>
			</div>
			<div class="mbl-info">
				<ul>
					<li><a href="/#instruction" title="">Инструкция</a></li>
					<li><a href="/business-games" title="">Бизнес игры</a></li>
					<li><a href="/press-center" title="">Пресс-центр</a></li>
					<li><a href="/products" title="">Наши продукты</a></li>
					<li><a href="/contacts" title="">Контакты</a></li>					
				</ul>
			</div>
		</div>
	</div>

	<div class="tiger-main">		
		<div class="container-main">
			<div class="head">
				<div class="headers">
					<div class="col-md-3 logo-blk">
						<div class="logo"><a href="/" aria-label="На главную"><img src="images/tiger_2_1.svg" alt="Тигр — логотип проекта" /></a></div>
						<div class="header-logo-text">Скелет бизнеса:<br />модель тигра</div>
					</div>
					<div class="col-md-8 menu">
						<a href="/#instruction" title="">Инструкция</a>
						<a href="/business-games" title="">Бизнес игры</a>
						<a href="/press-center" title="">Пресс-центр</a>
						<a href="/products" title="">Наши продукты</a>
						<a href="/contacts" title="">Контакты</a>
					</div>
					<div class="col-md-1 cart"><img src="images/cart.svg" alt="Корзина" /></div>
					<div class="burgers">
						<nav class="navbar navbar-expand-lg navbar-light">																	
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Открыть меню">
								<span class="navbar-toggler-icon"></span>
							</button>							
						</nav>
					</div>
				</div>
			</div>
