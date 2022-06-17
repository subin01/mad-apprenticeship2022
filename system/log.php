<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$data = $_REQUEST;
if(empty($data['name'])) {
	// Takes raw data from the request
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);
}

$client = new Client(['http_errors' => false]); //GuzzleHttp\Client
$response = '';
try {
    $result = $client->request('post', 'https://makeadiff.in/api/v1/logs', [
       	'form_params' => [
       		// 'query' => $graphql,
       		'name'	=> $data['name'],
       		'log'	=> $data['log'],
       		'level'	=> isset($data['level']) ? $data['level'] : 'info',
       	],
        // 'auth' => ['data.simulation@makeadiff.in', 'pass'],
        'headers' => [
        	'Authorization' => 'Basic c3VsdS5zaW11bGF0aW9uQG1ha2VhZGlmZi5pbjpwYXNz',
        	// 'Content-Type' => 'application/json'
        ]
    ]);
    $response = $result->getBody();
} catch (Exception $e) {
    echo "ERROR: " . $response;
} finally {
    if ($response) {
    	echo $response;
	}
}

function escape($string) {
	return addslashes($string);
}