
<meta charset="utf-8"> 
<?php
$urok="Урок 22";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['username']))			{$username			= $_POST['username'];		if ($username == '')	{unset($username);}}
if (isset($_POST['userphone']))		{$userphone		= $_POST['userphone'];		if ($userphone == '')	{unset($userphone);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($username) ) {
$username=stripslashes($username);
$username=htmlspecialchars($username);
}
if (isset($userphone) ) {
$userphone=stripslashes($userphone);
$userphone=htmlspecialchars($userphone);
}

// адрес почты куда придет письмо
$address="chernigovsky108@gmail.com";
// текст письма 
$note_text="Тема : $urok \r\nИмя : $username \r\n Email : $userphone \r\n Дополнительная информация : $text";

if (isset($username)  &&  isset ($sab) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$username</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b style='color:red;'> $userphone</b>.</p>";
}

?>