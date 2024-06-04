<?php

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"], $_POST["campus"])) {
        $nombre = $_POST["name"];
        $campus = $_POST["campus"];

        $stmt_insert_facultad = $conn->prepare("INSERT INTO facultades (name, campus) VALUES (?, ?)");
        $stmt_insert_facultad->bind_param("ss", $nombre, $campus);
        $stmt_insert_facultad->execute();

        echo json_encode(array("success" => true));
        $stmt_insert_facultad->close();
    }

    $conn->close();
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $result = $conn->query("SELECT * FROM facultades");
    $facultades = array();

    while ($row = $result->fetch_assoc()) {
        $facultades[] = $row;
    }

    echo json_encode($facultades);
    $conn->close();
    exit();
}
?>
