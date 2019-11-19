
  



    var db = new Dexie("gesPetrol");

    db.version(1).stores({
        liqPenet: newFunction()
    });

    db.open();
    console.dir(db);

    function newFunction() {
        return "++id, lpTipo, lpMarca, lpLote, lpVto, revTipo, revMarca, revLote, revVto, lampUv, lampUvSerie, lampUvCod, lampFeCal, trescuartos, medLuz, medLuzSerie, medLuzCod, medLuzFeCal, medLuzVto, ensAlc, ensProc, ensCond, ensArm, ensDes, ensLimp, ensAren, ensMec, ensDeseng, medLuzVis, medLuzUv, temp, aplicLpPin, aplicLpAero, aplicLpTie, luzVisMin, luzVisMax, luzUvMin, luzUvMax, tempMin, tempMax, remLp, secInt, apRevTie, limpFinal";
    }

//entrada de datos
const lpTipo = document.getElementById("lpTipo");
const lpMarca = document.getElementById("lpMarca");
const lpLote = document.getElementById("lpLote");
const lpVto = document.getElementById("lpVto");

const revTipo = document.getElementById("revTipo");
const revMarca = document.getElementById("revMarca");
const revLote = document.getElementById("revLote");
const revVto = document.getElementById("revVto");

const lampUv = document.getElementById("lampUv");
const lampUvSerie = document.getElementById("lampUvSerie");
const lampUvCod = document.getElementById("lampUvCod");
const lampFeCal = document.getElementById("lampFeCal");
const trescuartos = document.getElementById("trescuartos");

const medLuz = document.getElementById("medLuz");
const medLuzSerie = document.getElementById("medLuzSerie");
const medLuzCod = document.getElementById("medLuzCod");
const medLuzFeCal = document.getElementById("medLuzFeCal");
const medLuzVto = document.getElementById("medLuzVto");


function agregarDatos(){

    db.liqPenet.add(
        {
            lpTipo: lpTipo.value, 
            lpMarca: lpMarca.value,
            lpLote: lpLote.value,
            lpVto: lpVto.value, 
            revTipo: revTipo.value,
            revMarca: revMarca.value,
            revLote: revLote.value,
            revVto: revVto.value,
            lampUv: lampUv.value,
            lampUvSerie: lampUvSerie.value,
            lampUvCod: lampUvCod.value,
            lampFeCal: lampFeCal.value,
            trescuartos: trescuartos.value,
            medLuz: medLuz.value,
            medLuzSerie: medLuzSerie.value,
            medLuzCod: medLuzCod.value,
            medLuzFeCal: medLuzFeCal.value,
            medLuzVto: medLuzVto.value
        }
    ).then(function(){
        console.log("Se agregaron los datos");
        listar();
    }).catch(function(err){

    });

    limpiar();

    
}

function listar(){
    //db.liqPenet.get(1, function (registros) {
        //$("#mostrar").text(registros.lpTipo);
        $("#mostrar").html("");
        db.liqPenet.each(function(registro){
            //retorna todo registro que tenha como nome igual a "Joao"
            //console.log(registro);
            
           // $("#mostrar").append("<br>" + registro.lpTipo + " " + registro.lpMarca + " " + registro.lpLote + " " + registro.lpVto);
            
        });

        //Mostrar total de registros:
       // db.liqPenet.toCollection().count(function (count) {
         //   $("#mostrar").html(count);
       // });
  
    //});
}


//function actualizarDatos(){
  //  db.liqPenet.update(2, {name: "Number 2"}).then(function (updated) {
    //    if (updated)
      //    console.log ("Friend number 2 was renamed to Number 2");
      //  else
      //    console.log ("Nothing was updated - there were no friend with primary key: 2");
      //});
//}

//https://dexie.org/docs/Table/Table.update()

function limpiar(){
    //document.getElementById("frmDatos").reset();
}

