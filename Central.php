<?php
 include ('connect.php');

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
