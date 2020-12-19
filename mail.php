<?php

ini_set('SMTP','smtp.orange.fr');
ini_set('smtp_port',25);


if(preg_match("#^[0-9a-z._-]+@[a-z0-9_._]{2,}\.[a-z]{2,4}$#", $_POST['email']) && preg_match("#^0[0-7]([-. ]?[0-9]{2}){4}$#", $_POST['phone']))
	{
$email = addslashes(htmlspecialchars(htmlentities(trim($_POST['email']))));
$phone= $_POST['phone'];
$name= addslashes(htmlspecialchars(htmlentities(trim($_POST['name']))));
$message= addslashes(htmlspecialchars(htmlentities(trim($_POST['message']))));
$info= $email .' '. $phone .' '. $name .' ' . $message;
 $message=wordwrap($message, 70, "\r\n")   ;
    $retour = mail('d.gardie@gmail.com', 'Envoi depuis portfolio', $info, 'from:d.gardie@gmail.com');
        if($retour){

          echo "envoi réussi";
          header('Refresh: 1; ./index.html');}else{echo "erreur envoi";}

        if(isset($_POST['copy-mail'])){
            $retour_exp = mail($email, 'Envoi depuis portfolio de David Gardie', $info, 'from:d.gardie@gmail.com');
        }
        
    }else{
    	echo"There is an entry error";
    }

    ?>