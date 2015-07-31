<?php


if(isset($_POST['adresse']))
{

$adresse=$_POST['adresse'];


$ip=$_SERVER['REMOTE_ADDR'];
$message="
Nouveau utilisateur: $adresse <br>
Adresse ip: $ip
";
include('sendmail.php');
$env_mail->envoyer('contact@soulandbeauty.be','teste mail',$message);
echo 'Email enregistré';

}
?>
