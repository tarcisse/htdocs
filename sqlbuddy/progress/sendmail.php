<?php

class ev_mail {
 
    
 function envoyer($destinataire,$sujet,$message)
 {
    
    
    
require_once('PHPMailer_v5.1/class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail             = new PHPMailer();

$body             = $message;
//$body             = eregi_replace("[\]",'',$body);

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "ns0.ovh.net"; // SMTP server
$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
                                           // 1 = errors and messages
                                          // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "ns0.ovh.net";      // sets GMAIL as the SMTP server
$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
$mail->Username   = "info@soulnbeauty.be";  // GMAIL username
$mail->Password   = "soulandbeauty147";            // GMAIL password

$mail->SetFrom('info@soulnbeauty.be');

//$mail->AddReplyTo($adresse);

$mail->Subject    = $sujet;

$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

$mail->MsgHTML($body);


$mail->AddAddress($destinataire, "soulandbeauty");

//$mail->AddAttachment("images/phpmailer.gif");      // attachment
//$mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

if(!$mail->Send()) {
 // echo "Mailer Error: " . $mail->ErrorInfo;
 die ("une erreur inatendue s' est produite, verifier si un mail vous a été envoyez");
} else {
    
 }
    
 }    
    


function envoyerp($destinataire,$sujet,$message,$piece)
 {
    
    
    
require_once('PHPMailer_v5.1/class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail             = new PHPMailer();

$body             = $message;
//$body             = eregi_replace("[\]",'',$body);

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "auth.smtp.1and1.fr"; // SMTP server
$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
                                           // 1 = errors and messages
                                          // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "auth.smtp.1and1.fr";      // sets GMAIL as the SMTP server
$mail->Port       = 465;                   // set the SMTP port for the GMAIL server
$mail->Username   = "test@vipdropoff.com";  // GMAIL username
$mail->Password   = "t6666666666";            // GMAIL password

$mail->SetFrom('test@vipdropoff.com');

//$mail->AddReplyTo($adresse);

$mail->Subject    = $sujet;

$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

$mail->MsgHTML($body);
$mail->AddAttachment($piece);

$mail->AddAddress($destinataire, "VIPDROPOFF");

//$mail->AddAttachment("images/phpmailer.gif");      // attachment
//$mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

if(!$mail->Send()) {
 // echo "Mailer Error: " . $mail->ErrorInfo;
 die ("une erreur inatendue s' est produite, verifier si un mail vous a été envoyez");
} else {
    
 }
    
 }    
    


}
$env_mail=new ev_mail();

?>