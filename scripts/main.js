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

function render() {
    renderParrafoN1()
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