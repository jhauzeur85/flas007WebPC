<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link href="CSS/MiEstilo.css" rel="stylesheet" type="text/css"/>
        <script src="JS/jquery-3.3.1.js" type="text/javascript"></script>
        <script src="JS/logica.js" type="text/javascript"></script>
    </head>
    <body>
        <label id="subti">Ingrese Numero</label><br>
        <input type="number" id="n1" value="" placeholder="Ingrese un numero" /><br>
        <label>Ingrese Numero</label><br>
        <input class="ColorVerde" type="number" id="n2" value="" placeholder="Ingrese un numero" /><br>
        <button onclick="hacerSuma()">Suma</button>
        <button>Resta</button>
        <button onclick="hacerMulti()" class="ColorVerde">Multi</button>
        <button class="ColorVerde">Divi</button>
        <h1 class="ColorVerde" id="res"></h1>
    </body>
</html>
