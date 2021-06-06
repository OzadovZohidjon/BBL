<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {
    $phone = $_POST['name'];
}
if (isset($_POST['phone'])) {
    $name = $_POST['phone'];
}
if (isset($_POST['title'])) {
    $title = $_POST['title'];
}
/* Сюда впишите свою эл. почту */
$myaddres  = "rsh@blackriver.agency,s1905telos@mail.ru,s1905@mail.ru"; // кому отправляем

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка BBL!\nИмя:  $phone\nТелефон:$name";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub = 'sekr@telosbeauty.ru'; //сабж
$email = 'Заказ обратного звонка'; // от кого
$send = mail($myaddres, $mes, "Заказ обратного звонка c Лэндинга BBL!\nИмя:  $phone\nТелефон:$name");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Спасибо! Мы свяжемся с вами!</title>
</head>

<body>
    <h1>Спасибо! Мы свяжемся с вами!</h1>
</body>

</html>