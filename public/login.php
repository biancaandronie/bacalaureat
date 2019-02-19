
<?php
function conectare($host = "localhost", $username = "root", $password = "", $dbname = "LOGIN") {

    return mysqli_connect($host, $username, $password, $dbname);
}

function verificare_user($u) {
    $l = conectare();
    $u = test_data($u);
    $u = mysqli_real_escape_string($l, $u);
    $sql = "SELECT ID, USERNAME, PAROLA FROM ADMIN WHERE USERNAME='$u'";
    $result = mysqli_query($l, $sql);
    return mysqli_fetch_array($result);
}

function test_data($data) {
    $data = trim($data); //scoatem spatiile albe de la inceputul si sf cuvantului
    $data = htmlspecialchars($data); // <b> = &lt;b&gt;
    $data = stripslashes($data); // http:\\www.mysite.com\scripts\s1.js => http:\www.mysite.comscriptss1.js
    return $data;
}

function redirect($url) {
    ob_start();
    header('Location: '.$url);
    ob_end_flush();
    die();
}

function login($u, $p) {
    $l = conectare();
    $u = test_data($u);
    $p = test_data($p);

    $u = mysqli_real_escape_string($l, $u);
    $p = mysqli_real_escape_string($l, $p);
    $user = verificare_user($u);
    if ($user) {
        //daca user-ul este deja inregistrat, verificam parola
        //if(md5($p)==$user['parola']){
        echo json_encode(array("sent" => true));
        header('Location: https://www.google.ro/');
        //return $user;
        //}else{
           // return null;
        //}

    }else{
        //user-ul nu a fost inregistrat inainte
        return null;
    }
}

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['fname']) && empty($_POST['parola']) ) die();
if ($_POST){
    // set response code - 200 OK
    http_response_code(200);
    $username = $_POST['fname'];
    $parola = $_POST['parola'];
    //echo json_encode( $_POST );
    $login_user = login($username,$parola);
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => "Username or Password incorrect"
     ]
 );
}






