<?php
var_dump($_REQUEST);

$json = file_get_contents('php://input');
// $data = json_decode($json, true);

var_dump($json);