<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
$email= $_POST["email"];
//$email="mohdishaq9754@gmail.com";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'workforishaque@gmail.com';                     //SMTP username
    $mail->Password   = 'ovcg xgcy gazy abcy';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('official@achivcreations.in', 'Details');
    $mail->addAddress(  $email , 'Mohd Ishaq');     //Add a recipient
   
    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Thanks for subscribing Achiv Creations';
    $mail->Body    = "Hello User <br> <b>Congratulations!</b>You've taken the first step toward a fantastic journey with Achiv Crteations.  <br> <br> Your subscription is almost complete. Please check and  confirm yourEmail: $email . <br> <br>We can't wait to have you on board. Get ready for exclusive content, updates, and much more. Your adventure with us begins now! <br> <br> Best Regards, <br>The Achiv Creations Team</br>";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>