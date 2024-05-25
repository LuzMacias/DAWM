<?php

//CORS
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){

    if (isset($_POST["name"],$_POST["age"],$_POST["genero"],$_POST["facultad"],$_POST["correo"],$_POST["contraseña"],$_POST["materia1"],$_POST["materia2"],$_POST["materia3"])) {
        $nombre = $_POST["name"];
        $edad = $_POST["age"];
        $genero = $_POST["genero"];
        $facultad = $_POST["facultad"];
        $correo = $_POST["correo"];
        $contraseña = $_POST["contraseña"];
        $materia1 = $_POST["materia1"];
        $materia2 = $_POST["materia2"];
        $materia3 = $_POST["materia3"];

        $stmt_insert_usuarios =$conn->prepare("INSERT INTO estudiantes (name,age,genero,facultad,correo,contraseña,materia1,materia2,materia3) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt_insert_usuarios->bind_param("sisssssss",$nombre,$edad,$genero,$facultad,$correo,$contraseña,$materia1,$materia2,$materia3);
        $stmt_insert_usuarios->execute();

        echo json_encode(array("success" => true));
        $stmt_insert_usuarios-> close();

       
    }

    $conn->close();
    exit();
}
?>