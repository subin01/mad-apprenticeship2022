<?php
require 'vendor/autoload.php';
require __DIR__ . '/../../apps/commons/includes/classes/ZohoClient.php';

header("Content-Type: application/json");

$data = $_REQUEST;
if(empty($data['campaign'])) {
    // Takes raw data from the request
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
}

if(!isset($data["campaign"])) die("{'status': 'error', 'message' : 'Campaign not provided.'}");

$campaign = $data["campaign"];

try {
    $oauth_secret = json_decode(file_get_contents(realpath(__DIR__ . '/../../apps/worker/system/zoho_oauth_secret.json')));
    $zoho_client = new ZohoClient($oauth_secret->client_id, $oauth_secret->client_secret, 'https://makeadiff.in/apps/worker/zoho_oauth_callback.php',
        ['access_token_file' => realpath(__DIR__ . '/../../apps/worker/system/access_token.dat')]);
} catch(Exception $e) {
    die("Error : " . $e);
}

try {
    $result = $zoho_client->request('POST', 'https://creator.zoho.com/api/v2/jithincn1/mad-recruit/form/Campaign_Track_Record', [
        'Vistor_IPAddress'  => $_SERVER['REMOTE_ADDR'],
        "Campaign_ID"       => $campaign
    ]);
    if (stripos($result['message'], 'success') !== false) { // Yes, a wierd way to check a for sucess, but future compatiblity
        echo json_encode(['status' => 'success', 'message' => "Data pushed to Zoho"]);
    } else {
        echo json_encode(['status' => 'error', 'message' => "Failure encountered in pushing data to Zoho"]);
    }
    // var_dump($result);

} catch (Exception $e) {
    // Can't send data to Zoho
    echo json_encode(['status' => 'error', 'message' => "Failure encountered in pushing data to Zoho($e)"]);
}
