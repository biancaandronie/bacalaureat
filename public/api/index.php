
<?php

require 'config.php';
require 'Slim/Slim.php';
require 'vendor/autoload.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->post('/login','login'); /* User login */

$app->run();

/************************* USER LOGIN *************************************/
/* ### User login ### */
function login() {
    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());
    try {
       $db = getDB();
       $userData ='';
       $sql = "SELECT user_id, username FROM users WHERE username=:username and password=:password ";
      $stmt = $db->prepare($sql);
      $stmt->bindParam("username", $data->username, PDO::PARAM_STR);
      $password=hash('sha256',$data->password);
      $stmt->bindParam("password", $password, PDO::PARAM_STR);
      $stmt->execute();
      $mainCount=$stmt->rowCount();
      $userData = $stmt->fetch(PDO::FETCH_OBJ);
if(!empty($userData))
{
     $user_id=$userData->user_id;
     $userData->token = apiToken($user_id);
}
    $db = null;
if($userData){
   $userData = json_encode($userData);
   echo '{"userData": ' .$userData . '}';
} else {
   echo '{"error":{"text":"Bad request wrong username and password"}}';
}

}
catch(PDOException $e) {
echo '{"error":{"text":'. $e->getMessage() .'}}';
}
}
?>


