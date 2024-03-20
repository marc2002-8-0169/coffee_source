<?php

$host = 'localhost'; 
$dbname = 'coffee_database'; 
$username = 'root'; 
$password = ''; 

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if ($pdo) {
    echo "Connected successfully!";
} else {
    die("Connection failed: " . $pdo->errorInfo()[2]);
}
?>