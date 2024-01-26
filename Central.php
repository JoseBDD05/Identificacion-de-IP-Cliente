<?php
 include ('connect.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("https://josebdd05.github.io/Identificacion-de-IP-Cliente/index.html"), true);

    $ip = $data['ip'];
    $pais = $data['pais'];
    $continente = $data['continente'];
    $zona_horaria = $data['zona_horaria'];
    $nombre = $data['nombre'];
    $comida = $data['comida'];

    $sql = "INSERT INTO datos (ip, pais, continente, zona_horaria, nombre, comida) VALUES ('$ip', 
'$pais', '$continente', '$zona_horaria','$nombre', '$comida')";


    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('status' => 'success', 'message' => 'Datos insertados correctamente'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Error al insertar datos: ' . $conn->error));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Método no permitido'));
}

$conn->close();
?>