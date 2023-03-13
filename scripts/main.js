import {Contador} from "./contador.js";

// crea cosntante para acceder globalmente y llama a la funcion del contador
let constant = [];
constCounter()

/*selecciona todos los elementos li dentro de ul, dentro de sector
y les agrega evento de consola, en futuro sera para actualizar el parrafo
donde se muestre la data*/
const leyendList = document.querySelectorAll("#map .sector ul li");
leyendList.forEach(leyendList => {
    leyendList.addEventListener("change", () => render());
    });

//////////////////////////////////////////
//CREAMOS EL CONTADOR PARA CADA LEYENDA//
//////////////////////////////////////////

/* primero declaramos variables para seleccionar todos los elementos li
y creamos un array vacio para despues poner los li ahi dentro*/
function constCounter() {
    const mapSelector = document.querySelector(".map");
    const listLi = mapSelector.getElementsByTagName("li");
    const ids = [];

/* iteramos por todos los elementos li y los agregamos al array x
evitando los elementos li que no tengan id */
    for (let i = 0; i < listLi.length; i++) {
        let x = listLi[i].id;
        if (x != "") {
            ids.push(x);
        }
    }

/* a cada elemento de la lista "x" donde estan los li, les creamos una constante
donde el nombre esta compuesto por 2 partes del id, antes y despues del "-"*/

    ids.forEach(function (id) {
        const zone_name = id.split("-")
        constant[zone_name[0]+zone_name[1]] = new Contador(zone_name[0].toUpperCase(), document.getElementById(id));
        //asignamos al window las constantes para acceder globalmente//
        window.constant = constant;
    });
}

///////////////////////////////////////////////////
//TERMINA LA CREACION DE CONTADOR DE CADA LEYENDA//
///////////////////////////////////////////////////

function renderParrafoN1(){
    const equipoN1 = document.getElementById("teamsN1")
    const valueEquipoN1 = equipoN1.value

    let parrafoN1 = "N1" + valueEquipoN1
    if (window.constant.n1rey.number != 0) {
        parrafoN1 += " - " + window.constant.n1rey.legend + ": " + window.constant.n1rey.number
    }
    if (window.constant.n1slkr.number != 0) {
        parrafoN1 += " - " + window.constant.n1slkr.legend + ": " + window.constant.n1slkr.number
    }
    if (window.constant.n1jml.number != 0) {
        parrafoN1 += " - " + window.constant.n1jml.legend + ": " + window.constant.n1jml.number
    }
    if (window.constant.n1jmk.number != 0) {
        parrafoN1 += " - " + window.constant.n1jmk.legend + ": " + window.constant.n1jmk.number
    }
    if (window.constant.n1see.number != 0) {
        parrafoN1 += " - " + window.constant.n1see.legend + ": " + window.constant.n1see.number
    }
    if (window.constant.n1lv.number != 0) {
        parrafoN1 += " - " + window.constant.n1lv.legend + ": " + window.constant.n1lv.number
    }
    if (window.constant.n1jabba.number != 0) {
        parrafoN1 += " - " + window.constant.n1jabba.legend + ": " + window.constant.n1jabba.number
    }
    document.getElementById("parrafoN1").innerHTML = parrafoN1;
}

function renderParrafoS1(){
    const equipoS1 = document.getElementById("teamsS1")
    const valueEquipoS1 = equipoS1.value

    let parrafoS1 = "S1" + valueEquipoS1
    if (window.constant.s1rey.number != 0) {
        parrafoS1 += " - " + window.constant.s1rey.legend + ": " + window.constant.s1rey.number
    }
    if (window.constant.s1slkr.number != 0) {
        parrafoS1 += " - " + window.constant.s1slkr.legend + ": " + window.constant.s1slkr.number
    }
    if (window.constant.s1jml.number != 0) {
        parrafoS1 += " - " + window.constant.s1jml.legend + ": " + window.constant.s1jml.number
    }
    if (window.constant.s1jmk.number != 0) {
        parrafoS1 += " - " + window.constant.s1jmk.legend + ": " + window.constant.s1jmk.number
    }
    if (window.constant.s1see.number != 0) {
        parrafoS1 += " - " + window.constant.s1see.legend + ": " + window.constant.s1see.number
    }
    if (window.constant.s1lv.number != 0) {
        parrafoS1 += " - " + window.constant.s1lv.legend + ": " + window.constant.s1lv.number
    }
    if (window.constant.s1jabba.number != 0) {
        parrafoS1 += " - " + window.constant.s1jabba.legend + ": " + window.constant.s1jabba.number
    }
    document.getElementById("parrafoS1").innerHTML = parrafoS1;
}

function renderParrafoN2(){
    const equipoN2 = document.getElementById("teamsN2")
    const valueEquipoN2 = equipoN2.value

    let parrafoN2 = "N2" + valueEquipoN2
    if (window.constant.n2rey.number != 0) {
        parrafoN2 += " - " + window.constant.n2rey.legend + ": " + window.constant.n2rey.number
    }
    if (window.constant.n2slkr.number != 0) {
        parrafoN2 += " - " + window.constant.n2slkr.legend + ": " + window.constant.n2slkr.number
    }
    if (window.constant.n2jml.number != 0) {
        parrafoN2 += " - " + window.constant.n2jml.legend + ": " + window.constant.n2jml.number
    }
    if (window.constant.n2jmk.number != 0) {
        parrafoN2 += " - " + window.constant.n2jmk.legend + ": " + window.constant.n2jmk.number
    }
    if (window.constant.n2see.number != 0) {
        parrafoN2 += " - " + window.constant.n2see.legend + ": " + window.constant.n2see.number
    }
    if (window.constant.n2lv.number != 0) {
        parrafoN2 += " - " + window.constant.n2lv.legend + ": " + window.constant.n2lv.number
    }
    if (window.constant.n2jabba.number != 0) {
        parrafoN2 += " - " + window.constant.n2jabba.legend + ": " + window.constant.n2jabba.number
    }
    document.getElementById("parrafoN2").innerHTML = parrafoN2;
}

function renderParrafoS2(){
    const equipoS2 = document.getElementById("teamsS2")
    const valueEquipoS2 = equipoS2.value

    let parrafoS2 = "S2" + valueEquipoS2
    if (window.constant.s2rey.number != 0) {
        parrafoS2 += " - " + window.constant.s2rey.legend + ": " + window.constant.s2rey.number
    }
    if (window.constant.s2slkr.number != 0) {
        parrafoS2 += " - " + window.constant.s2slkr.legend + ": " + window.constant.s2slkr.number
    }
    if (window.constant.s2jml.number != 0) {
        parrafoS2 += " - " + window.constant.s2jml.legend + ": " + window.constant.s2jml.number
    }
    if (window.constant.s2jmk.number != 0) {
        parrafoS2 += " - " + window.constant.s2jmk.legend + ": " + window.constant.s2jmk.number
    }
    if (window.constant.s2see.number != 0) {
        parrafoS2 += " - " + window.constant.s2see.legend + ": " + window.constant.s2see.number
    }
    if (window.constant.s2lv.number != 0) {
        parrafoS2 += " - " + window.constant.s2lv.legend + ": " + window.constant.s2lv.number
    }
    if (window.constant.s2jabba.number != 0) {
        parrafoS2 += " - " + window.constant.s2jabba.legend + ": " + window.constant.s2jabba.number
    }
    document.getElementById("parrafoS2").innerHTML = parrafoS2;
}

function renderParrafoN3(){
    const equipoN3 = document.getElementById("teamsN3")
    const valueEquipoN3 = equipoN3.value

    let parrafoN3 = "N3" + valueEquipoN3
    if (window.constant.n3rey.number != 0) {
        parrafoN3 += " - " + window.constant.n3rey.legend + ": " + window.constant.n3rey.number
    }
    if (window.constant.n3slkr.number != 0) {
        parrafoN3 += " - " + window.constant.n3slkr.legend + ": " + window.constant.n3slkr.number
    }
    if (window.constant.n3jml.number != 0) {
        parrafoN3 += " - " + window.constant.n3jml.legend + ": " + window.constant.n3jml.number
    }
    if (window.constant.n3jmk.number != 0) {
        parrafoN3 += " - " + window.constant.n3jmk.legend + ": " + window.constant.n3jmk.number
    }
    if (window.constant.n3see.number != 0) {
        parrafoN3 += " - " + window.constant.n3see.legend + ": " + window.constant.n3see.number
    }
    if (window.constant.n3lv.number != 0) {
        parrafoN3 += " - " + window.constant.n3lv.legend + ": " + window.constant.n3lv.number
    }
    if (window.constant.n3jabba.number != 0) {
        parrafoN3 += " - " + window.constant.n3jabba.legend + ": " + window.constant.n3jabba.number
    }
    document.getElementById("parrafoN3").innerHTML = parrafoN3;
}

function renderParrafoS3(){
    const equipoS3 = document.getElementById("teamsS3")
    const valueEquipoS3 = equipoS3.value

    let parrafoS3 = "S3" + valueEquipoS3
    if (window.constant.s3rey.number != 0) {
        parrafoS3 += " - " + window.constant.s3rey.legend + ": " + window.constant.s3rey.number
    }
    if (window.constant.s3slkr.number != 0) {
        parrafoS3 += " - " + window.constant.s3slkr.legend + ": " + window.constant.s3slkr.number
    }
    if (window.constant.s3jml.number != 0) {
        parrafoS3 += " - " + window.constant.s3jml.legend + ": " + window.constant.s3jml.number
    }
    if (window.constant.s3jmk.number != 0) {
        parrafoS3 += " - " + window.constant.s3jmk.legend + ": " + window.constant.s3jmk.number
    }
    if (window.constant.s3see.number != 0) {
        parrafoS3 += " - " + window.constant.s3see.legend + ": " + window.constant.s3see.number
    }
    if (window.constant.s3lv.number != 0) {
        parrafoS3 += " - " + window.constant.s3lv.legend + ": " + window.constant.s3lv.number
    }
    if (window.constant.s3jabba.number != 0) {
        parrafoS3 += " - " + window.constant.s3jabba.legend + ": " + window.constant.s3jabba.number
    }
    document.getElementById("parrafoS3").innerHTML = parrafoS3;
}

function renderParrafoN4(){
    const equipoN4 = document.getElementById("teamsN4")
    const valueEquipoN4 = equipoN4.value

    let parrafoN4 = "N4" + valueEquipoN4
    if (window.constant.n4rey.number != 0) {
        parrafoN4 += " - " + window.constant.n4rey.legend + ": " + window.constant.n4rey.number
    }
    if (window.constant.n4slkr.number != 0) {
        parrafoN4 += " - " + window.constant.n4slkr.legend + ": " + window.constant.n4slkr.number
    }
    if (window.constant.n4jml.number != 0) {
        parrafoN4 += " - " + window.constant.n4jml.legend + ": " + window.constant.n4jml.number
    }
    if (window.constant.n4jmk.number != 0) {
        parrafoN4 += " - " + window.constant.n4jmk.legend + ": " + window.constant.n4jmk.number
    }
    if (window.constant.n4see.number != 0) {
        parrafoN4 += " - " + window.constant.n4see.legend + ": " + window.constant.n4see.number
    }
    if (window.constant.n4lv.number != 0) {
        parrafoN4 += " - " + window.constant.n4lv.legend + ": " + window.constant.n4lv.number
    }
    if (window.constant.n4jabba.number != 0) {
        parrafoN4 += " - " + window.constant.n4jabba.legend + ": " + window.constant.n4jabba.number
    }
    document.getElementById("parrafoN4").innerHTML = parrafoN4;
}

function renderParrafoS4(){
    const equipoS4 = document.getElementById("teamsS4")
    const valueEquipoS4 = equipoS4.value

    let parrafoS4 = "S4" + valueEquipoS4
    if (window.constant.s4rey.number != 0) {
        parrafoS4 += " - " + window.constant.s4rey.legend + ": " + window.constant.s4rey.number
    }
    if (window.constant.s4slkr.number != 0) {
        parrafoS4 += " - " + window.constant.s4slkr.legend + ": " + window.constant.s4slkr.number
    }
    if (window.constant.s4jml.number != 0) {
        parrafoS4 += " - " + window.constant.s4jml.legend + ": " + window.constant.s4jml.number
    }
    if (window.constant.s4jmk.number != 0) {
        parrafoS4 += " - " + window.constant.s4jmk.legend + ": " + window.constant.s4jmk.number
    }
    if (window.constant.s4see.number != 0) {
        parrafoS4 += " - " + window.constant.s4see.legend + ": " + window.constant.s4see.number
    }
    if (window.constant.s4lv.number != 0) {
        parrafoS4 += " - " + window.constant.s4lv.legend + ": " + window.constant.s4lv.number
    }
    if (window.constant.s4jabba.number != 0) {
        parrafoS4 += " - " + window.constant.s4jabba.legend + ": " + window.constant.s4jabba.number
    }
    document.getElementById("parrafoS4").innerHTML = parrafoS4;
}

function renderParrafoShips1(){
    const equipoShips1 = document.getElementById("shipsteam1")
    const valueEquipoShips1 = equipoShips1.value

    let parrafoShips1 = "Ships1" + valueEquipoShips1
    if (window.constant.ships1ejecutor.number != 0) {
        parrafoShips1 += " - " + window.constant.ships1ejecutor.legend + ": " + window.constant.ships1ejecutor.number
    }
    if (window.constant.ships1profundidad.number != 0) {
        parrafoShips1 += " - " + window.constant.ships1profundidad.legend + ": " + window.constant.ships1profundidad.number
    }
    
    document.getElementById("parrafoShips1").innerHTML = parrafoShips1;
}

function renderParrafoShips2(){
    const equipoShips2 = document.getElementById("shipsteam2")
    const valueEquipoShips2 = equipoShips2.value

    let parrafoShips2 = "Ships2" + valueEquipoShips2
    if (window.constant.ships2ejecutor.number != 0) {
        parrafoShips2 += " - " + window.constant.ships2ejecutor.legend + ": " + window.constant.ships2ejecutor.number
    }
    if (window.constant.ships2profundidad.number != 0) {
        parrafoShips2 += " - " + window.constant.ships2profundidad.legend + ": " + window.constant.ships2profundidad.number
    }
    
    document.getElementById("parrafoShips2").innerHTML = parrafoShips2;
}

console.log(window.constant)

function render() {
    renderParrafoN1()
    renderParrafoS1()
    renderParrafoN2()
    renderParrafoS2()
    renderParrafoN3()
    renderParrafoS3()
    renderParrafoN4()
    renderParrafoS4()
    renderParrafoShips1()
    renderParrafoShips2()
}

document.getElementById("botonconsola").addEventListener("click", ()=> render() )

////////////////////////////////////////
// FUNCION PARA EQUIPOS EN LABEL TEAM //
////////////////////////////////////////
const labelTeams = document.querySelectorAll("select")
console.log(labelTeams)
const optionTeams = [
    {value: " ", text: ""},
    {value: " - PADME", text: "Padme"},
    {value: " - GG", text: "General Grivous"},
    {value: " - PO", text: "Primera Orden"},
    {value: " - GEOS R", text: "Geos Reliquia"},
    {value: " - CAZAS", text: "Cazarrecompensas"},
    {value: " - MON-MOTMA", text: "Mon-Mothma"},
    {value: " - AR", text: "Antigua Republica"},
    {value: " - HERMANAS", text: "Hermanas de la noche"}
]

for (let i = 0; i < labelTeams.length; i++) {

    let teams = labelTeams[i];

    if (teams.id && teams.id.indexOf("ship") !== -1) {
        continue;
    }
    
        for(let k=0; k < optionTeams.length; k++ ){
            let teams = labelTeams[i]
            let options = optionTeams[k]

            let optionElement = document.createElement("option")
            
            optionElement.value = options.value
            optionElement.text = options.text

            teams.appendChild(optionElement)
        }
}
//////////////////////////////////////////////
// FINAL FUNCION PARA EQUIPOS EN LABEL TEAM //
//////////////////////////////////////////////