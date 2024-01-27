<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
 include ('connect.php');
    // Recibe los datos del cliente (suponiendo que se envían como JSON)
    $ip = $_POST['ip'];
    $pais = $_POST['pais'];
    $continente = $_POST['continente'];
    $zona_horaria = $_POST['zona_horaria'];
    $nombre = $_POST['nombre'];
    $moneda = $_POST['moneda'];

    $sql = "INSERT INTO DatosFrancia (ip, pais, continente, zona_horaria, nombre, moneda) VALUES ('$ip', 
    '$pais', '$continente', '$zona_horaria','$nombre', '$moneda')";


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