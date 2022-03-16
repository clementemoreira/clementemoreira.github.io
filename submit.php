<?php

require_once 'Egoi/Factory.php';

if((empty($_POST['name'])) || (empty($_POST['email'])) ){
die("<b>ERROR!</b> All fields must be filled.");
}

$name = $_POST['name'];
$email = $_POST['email'];

$apikey = "e2fd7ebb0224595f17c90d4060afa005b9b65170";

$arguments = array(
    "apikey" => $apikey,
    "listID" => 8,
    "first_name" => $name,
    "email" => $email,
    "status" => 1,
);

// $api = EgoiApiFactory::getApi(Protocol::Soap);
 $api = (new EgoiApiFactory)->getApi(Protocol::Rest);
//$api = EgoiApiFactory::getApi(Protocol::XmlRpc);
$result = $api->addSubscriber($arguments);
echo print_r($result);


?>