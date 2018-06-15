/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Permite Almacenar JSON de Categorias
 * @type {Array}
 */
var BodCat = new Array();

/**
 * Metodoq ue permite crear Catgorias
 * @return {undefined}
 */

function asigID() {
    $("#fkCat").html("<option value='a'>seleccione</option>");
    var limite = BodCat.length;
    if (limite == 0) {
        $("#codCa").val("1");
    } else {
        var mayor = 0;
        for (var i = 0; i < limite; i++) {
            var cat = BodCat[i];
            if (cat.cod > mayor) {
                mayor = cat.cod;
            }
            $("#fkCat").append("<option value='"+cat.cod+"'>"+cat.nombre+"</option>");
        }
        mayor = mayor + 1;
        $("#codCa").val(mayor);
    }
}



function crearCat() {
    var codCat = parseInt($("#codCa").val());
    var nomCat = $("#nomCa").val();
    var desCat = $("#desCa").val();
    var categoria = {
        cod: codCat,
        nombre: nomCat,
        descrpcion: desCat
    };
    BodCat.push(categoria);
    $("#limpiarForCat").trigger("click");
    asigID();
    alert("La categoria fue Creada");
}

function OcultarTabCat() {
    $("#tabCat").fadeOut("explode");
}

function mostarTabCat() {
    $("#tabCat").fadeIn("explode");
    var limite = BodCat.length;
    $("#curTabCat").html("");
    for (var i = 0; i < limite; i++) {
        var categoria = BodCat[i];

        var hoja = "<tr><td>" + (i + 1) + "</td><td>" + categoria.cod + "</td><td>" + categoria.nombre + "</td><td>" + categoria.descrpcion + "</td></tr>";
        $("#curTabCat").append(hoja);
    }
}

function MostarBuscar() {
    $("#bloqBus").fadeIn();
}

function ReaLizaBusCatID() {
    var codid = $("#codBusCat").val();
    $("#curTabCatBus").html("");
    var estado = false;
    var limite = BodCat.length;
    for (var i = 0; i < limite; i++) {
        var categoria = BodCat[i];
        if (codid == categoria.cod) {
            var hoja = "<tr><td>" + (i + 1) + "</td><td>" + categoria.cod + "</td><td>" + categoria.nombre + "</td><td>" + categoria.descrpcion + "</td></tr>";
            $("#curTabCatBus").append(hoja);
            estado = true;
        }
    }
    
    if(estado == false){
        alert("el codigo "+ codid+" no esta asigando a una categoria");
    }

}