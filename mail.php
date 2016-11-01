<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){
    $to = 'Yaroslava.stashkevych@yandex.ua';
    $subject = 'Повідомлення з сайту FURNITURE.KM.UA'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Імя: '.$_POST['name'].'</p>
                        <p>Електронна адреса: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: FURNITURE.KM.UA \r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>