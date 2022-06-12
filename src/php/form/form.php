
<meta charset="utf-8"> 
<?php
$urok="Урок 22";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name1']))			{$name1			= $_POST['username'];		if ($name1 == '')	{unset($name1);}}
if (isset($_POST['userphone']))		{$userphone		= $_POST['userphone'];		if ($userphone == '')	{unset($userphone);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($name1) ) {
$name1=stripslashes($name1);
$name1=htmlspecialchars($name1);
}
if (isset($userphone) ) {
$userphone=stripslashes($userphone);
$userphone=htmlspecialchars($userphone);
}

// адрес почты куда придет письмо
$address="chernigovsky108@gmail.com";
// текст письма 
$note_text="Тема : $urok \r\nИмя : $name1 \r\n Email : $userphone \r\n Дополнительная информация : $text";

if (isset($name1)  &&  isset ($sab) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$name1</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b style='color:red;'> $userphone</b>.</p>";
}

?>