<?php

// Conexión a la base de datos (ajusta los valores según tu configuración)
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "dbcentralizada";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$ip = $_POST['ip'];
$pais = $_POST['pais'];
$continente = $_POST['continente'];
$zona_horaria = $_POST['zona_horaria'];
$nombre = $_POST['nombre'];
$comida = $_POST['comida'];

// Insertar datos en la base de datos
$sql = "INSERT INTO datos (ip, pais, continente, zona_horaria, nombre, comida) VALUES ('$ip', 
'$pais', '$continente', '$zona_horaria','$nombre', '$comida')";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente en la base de datos";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
