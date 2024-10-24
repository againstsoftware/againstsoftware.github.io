<?php
if (isset($_POST['Email'])) {

    // Email information
    $admin_email = "againstsoftware@gmail.com";

    function problem($error)
    {
        echo "Lo sentimos, pero hay errores en el formulario que envió. ";
        echo "Estos errores aparecen a continuación.<br><br>";
        echo "<em>We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.</em><br><br>";
        echo $error . "<br><br>";
        echo "Por favor, vuelva atrás y corrija estos errores.<br><br>";
        echo "<em>Please go back and fix these errors.</em><br><br>";
        die();
    }

    // Data validation	
    if (
        !isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])
        ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }
    
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone']; // required
    $subject = $_POST['subject']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'La dirección de correo electrónico que ingresó no parece ser válida.<br><em>The email address you entered does not appear to be valid.</em><br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'El nombre que ingresó no parece ser válido.<br><em>The name you entered does not appear to be valid.</em><br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'El mensaje que ingresó no parece ser válido.<br><em>The message you entered does not appear to be valid.</em><br>';
    }

    $phone_exp_ES = '/(?:6[0-9]{2}|7[1-9][0-9])(?: ?[0-9]{3}){2}\r?$/';
    $phone_exp_US = '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/';

    if (!preg_match('/^($phone_exp_ES|$phone_exp_US)$/', $phone)) {
        $error_message .= 'El número de teléfono que ingresó no parece ser válido.<br><em>The phone number you entered does not appear to be valid.</em><br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    // Compose email
    $email_message = "Detalles del formulario a continuación.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Nombre: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Teléfono: " . clean_string($phone) . "\n";
    $email_message .= "Asunto: " . clean_string($subject) . "\n";
    $email_message .= "Mensaje: " . clean_string($message) . "\n";

    // Create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($admin_email, $subject, $email_message, $headers);
?>

    <!-- include your own success html here -->

    Gracias por contactarnos. Nos pondremos en contacto con usted muy pronto.<br><em>Thank you for contacting us. We will be in touch with you very soon.</em>

<?php
}
?>