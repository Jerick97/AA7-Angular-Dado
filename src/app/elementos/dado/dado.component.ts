
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit{
 
  class : string = "";
  numero : number = 1;
  puntos : string = "*";
  numeroRandom : number[] = [];

  constructor() { }
   //Funcionamiento del Dado

  ngOnInit(): void {
    let recoverData = this.obtenerLocalStorage();
    this.generarAleatorio(); //Generamos un nuevo número Aleatorio
    if(recoverData !== null){
      let encontrar = JSON.parse(recoverData) //Obtenemos el array con los números almacenados en el LocalStorage
      if(encontrar[encontrar.length - 1] == this.numero){  //comparo el último elemento añadido con el valor actual en la variable numero
        console.log("Se repitió el número : "+ this.numero); //Mostramos el número que se repitió
        this.generarAleatorio(); //Volvemos a Generar un número Aleatorio
      }
    }
    console.log(this.obtenerLocalStorage()); //Mostramos todos los números almacenados en el LocalStorage
  }
  generarAleatorio(){
    this.numero = Math.ceil(Math.random() * 6); //Genera un número aleatorio 1 - 6
    this.numeroRandom.push(this.numero); //Agregamos el número aleatorio a nuestro Array
    //this.puntos = "*".repeat(this.numero); //repetirá tantos * como el número aleatorio
    this.guardarLocalStorage();
    this.girarDado(this.numero);
  }

  guardarLocalStorage(){
      let recoverData = this.obtenerLocalStorage();
      if(recoverData == null){
        //Si no tenemos nada guardado, vamos a guardar el arreglo
        localStorage.setItem('Random',JSON.stringify(this.numeroRandom));
      }else{
        //Si ya existe algo almacenado, añadimos un nuevo número
        let data = JSON.parse(recoverData);
        let nuevoNumber = this.numero;
        data.push(nuevoNumber);
        localStorage.setItem('Random',JSON.stringify(data));

      }
  }
  obtenerLocalStorage(){
    return localStorage.getItem("Random"); //Obtenemos el contenido del LocalStorage
  }
  //Según los números aleatorios se mostrara la cara del Dado
  girarDado(lado:number){
    switch (lado) {
      case 1:
        this.class = "show-front";
        break;
      case 2:
        this.class = "show-back";
        break;
      case 3:
        this.class = "show-right";
        break;
      case 4:
        this.class = "show-left";
        break;
      case 5:
        this.class = "show-top";
        break;
      case 6:
        this.class = "show-bottom";
        break;
    }
  }

}
