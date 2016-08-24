<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $servername = "localhost";
    $username = "likny";
    $password = "password";
    $dbname = "linkWrap";


    $timestamp = date('Y-m-d G:i:s');

    $radomInit = '';
    for ($i = 0; $i<8; $i++)
    {
        $radomInit .= mt_rand(0,9);
    }

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO links (linkValue, linkDate, random, bow, background) VALUES ('$data->link', '$timestamp', '$data->number', '$data->bow', '$data->background')";

    $conn->query($sql);

    $conn->close();
}

