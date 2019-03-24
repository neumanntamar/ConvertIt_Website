<?php
 	/*require_once "home/Gittie Klein/php/Mail.php";*/

 
	$name = $_POST['name'];
	$from = $_POST['email'];
	$subject = $_POST['subject'];
	$body = $_POST['message'];
	$image = "C:\xampp\htdocs\ConvertIt\images\convertitlogo.png";
	
	require 'C:\xampp\PHPMailer_5.2.0\class.phpmailer.php';
	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->SMTPSecure = 'ssl';
	$mail->SMTPDebug = 0; 
	$mail->SMTPAuth = true;
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 465;
	$mail->Username = 'convertitconversions';
	$mail->Password = 'neumannklein';
	$mail->setFrom('convertitconversions@gmail.com');
	
	$mail->addAddress('convertitconversions@gmail.com'); 
	$mail->Subject = $subject;
	$mail->Body = "From: $name \nEmail: $from \n\n$body";
	
	
	
	$mail2 = new PHPMailer;
	$mail2->isSMTP();
	$mail2->SMTPSecure = 'ssl';
	$mail2->SMTPDebug = 0; 
	$mail2->SMTPAuth = true;
	$mail2->Host = 'smtp.gmail.com';
	$mail2->Port = 465;
	$mail2->Username = 'convertitconversions';
	$mail2->Password = 'neumannklein';
	$mail2->setFrom('convertitconversions@gmail.com');
	
	$mail2->addAddress($from); 	//user should receive an email
	$mail2->Subject = "We received your email!";
	$mail2->AddEmbeddedImage('C:\xampp\htdocs\ConvertIt\images\convertitlogo.png', 'logoimg');
	$mail2->Body = "We received your email. Thank you for showing interest in ConvertIt.com\n\n" .
					"We will get back to you shortly\n\nThank you,\n" . 
				 	"The ConvertIt Team \n ";
	
	$mail2->send();
	//send the message, check for errors
	$result = true; 
	
	if (!$mail->send())
		$result = false; 

	if($result)
 		echo("email sent");
 	else {
 		echo("there was an issue sending your email. please try again");
	}
?>