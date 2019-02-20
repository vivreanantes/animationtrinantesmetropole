<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
try {
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)) {
        $_POST = json_decode(file_get_contents('php://input'), true);
    }
    if (count($_POST) === 0) {
        echo json_encode(array(
            "success"=>false,
            "message"=> "Les champs sont invalident."
        ));
        die;
    }
    $how = (isset($_POST['how']))?implode(",", $_POST['how']):"";
    $howOther = (isset($_POST['how_other']))?$_POST['how_other']:"";
    $think = (isset($_POST['think']))?$_POST['think']:"";
    $thinkOther = (isset($_POST['think_other']))?$_POST['think_other']:"";
    $info = (isset($_POST['info']))?$_POST['info']:"";
    $infoOther = (isset($_POST['info_other']))?$_POST['info_other']:"";
    $advice = (isset($_POST['advice']))?$_POST['advice']:"";
    $mail = (isset($_POST['mail']))?$_POST['mail']:"";
    
    $to = "chris-ren@netcourrier.com";
    $from = "mieuxtrieranantes@mieuxtrieranantes.fr";
    $subject = "Animation Tri Nantes Métropole";
    $header = "From: $from \n";
    $header .= "Content-type: text/plain; charset= utf8\n";
    $body = "Un utilisateur à renseigné les informations suivantes:\n";
    $body .= "- Comment avez vous entendu parler de l'opération : ".$how." ".$howOther."\n";
    $body .= "- Que pensez-vous de cette opération : ".$think." ".$thinkOther."\n";
    $body .= "- Les informations transmises aujourd'hui vous semblent-elles : ".$info." ".$infoOther."\n";
    $body .= "- Avez-vous des remarques particulières sur l'opération : ".$advice."\n";
    $body .= "- E-mail : ".$mail."\n";

    if (mail($to, $subject, $body, $header)) {
        echo json_encode(array(
        "success"=>true
    ));
    } else {
        echo json_encode(array(
        "success"=>false,
        "message"=> "Le mail n'a pas été envoyé."
    ));
    }
} catch (Exception $e) {
    echo json_encode(array(
        "success"=>false,
        "message"=> $e
    ));
}
