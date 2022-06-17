<?php

/* https://api.telegram.org/bot5522052473:AAE9A6eqb9miczS7oU5CkjIu5Tu8ujsifkM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['username'];
$phone = $_POST['userphone'];
$token = "5522052473:AAE9A6eqb9miczS7oU5CkjIu5Tu8ujsifkM";
$chat_id = "-1001731132984";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>