<?php
$name = $_GET["name"];
$email = $_GET["email"];
$tel = $_GET["tel"];
$message = $_GET["message"];

$html = "<html> <body>";
$html .= "<h2> Kontaktformular Anfrage : </h2>";
$html .= "<b> $name hat folgende Nachricht hinterlassen: </b>";
$html .= "<br/>";
$html .= "<br/>";
$html .= "<b> $message </b>";
$html .= "<br/>";
$html .= "<br/>";
$html .= "<h2> Kontaktdaten : </h2>";
$html .= "<b> $name </b>";
$html .= "<br/>";
$html .= "<b> $email </b>";
$html .= "<br/>";
$html .= "<b> $tel </b>";
$html .= "</body> </html>";


$to = "moin@erikquint.de";
$subject = "Neue Kontaktanfrage auf der Webseite";

$header = "From:moin@erikquint.de \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: text/html; charset=UTF-8";


$retval = mail($to, $subject, $html, $header);

if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}
?>