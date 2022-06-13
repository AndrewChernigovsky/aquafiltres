<meta charset="utf-8"> 
<?php
error_reporting( E_ERROR ); 

if (isset($_POST['username']))			{$username			= $_POST['username'];		if ($username == '')	{unset($username);}}
if (isset($_POST['full']))		{$full		= $_POST['full'];		if ($full == '')	{unset($full);}}
// if (isset($_POST['full2Flag']))		{$full2Flag		= $_POST['full2Flag'];		if ($full2Flag == '')	{unset($full2Flag);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}

if (isset($username) ) {
$username=stripslashes($username);
$username=htmlspecialchars($username);
}
if (isset($full) ) {
$full=stripslashes($full);
$full=htmlspecialchars($full);
}
// if (isset($full2Flag) ) {
// $full2Flag=stripslashes($full2Flag);
// $full2Flag=htmlspecialchars($full2Flag);
// }

$message = "
Имя: $username \r\n
Телефон: $full
";

$message = wordwrap($message, 70);

$headers = 'From: aqulife@example.com' . "\r\n" .
    'Reply-To: aqulife@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

var_dump(mail('chernigovsky108@gmail.com', 'Регистрация заявки - Aqualife', $message, $headers));
echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
<p style='color:green;'>Уважаемый(ая) <b style='color:red; font-size:24px'>$username</b> Ваше письмо отправленно успешно. Спасибо. <br>Вам перезвонят в течении 2 часов на номер<b style='color:red;'>$full</b>.</p>
</div>";
?>
