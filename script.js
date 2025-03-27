<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Descripciones de Puesto</title>
    <script src="dpt.json"></script> <script src="script.js"></script> <style>
      #descripcion-puesto {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        min-height: 80px;
      }
      #generar-descripcion {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      #generar-descripcion:hover {
        background-color: #367c39;
      }
    </style>
</head>
<body>
    <div id="descripcion-puesto"></div>
    <button id="generar-descripcion">Generar Descripción</button>
</body>
</html>
