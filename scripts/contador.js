export class Contador {
    zone;
    nLeyenda;
    legend;
    number = 0;
    parrafodata;

    constructor(zone, legend, number = 0){
        this.zone = zone;
        this.nLeyenda = legend.querySelector(".nLegend");
        this.number = number;
        this.legend = legend.querySelector(".nombreLeyendaP").innerText;
        legend.querySelector(".sumar").addEventListener("click", ()=> this.add());
        legend.querySelector(".restar").addEventListener("click", ()=> this.decrease());
    }

    add(amount = 1){
        this.number += amount;
        console.log(this.zone, this.legend, this.number);
        this.render()
    }

    decrease(amount = 1){
        this.number = Math.max(0, this.number-amount);
        console.log(this.zone, this.legend, this.number);
        this.render()
    }

    reset(){
        this.number = 0
    }

    render(){
        this.nLeyenda.innerText = this.number;
    }
}