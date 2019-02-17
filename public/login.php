
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

function login($u, $p) {
    $l = conectare();
    $u = test_data($u);
    $p = test_data($p);

    $u = mysqli_real_escape_string($l, $u);
    $p = mysqli_real_escape_string($l, $p);
    $user = verificare_email($u);
    if ($user) {
        //daca user-ul este deja inregistrat, verificam parola
        if(md5($p)==$user['parola']){
            return $user;
        }else{
            return null;
        }

    }else{
        //user-ul nu a fost inregistrat inainte
        return null;
    }
}







