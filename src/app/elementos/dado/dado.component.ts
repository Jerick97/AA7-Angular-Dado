import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  numero : number = 1;
  aleatorio : number = 0;
  puntos : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  generarAleatorio(){
    this.aleatorio = Math.ceil(Math.random() * 6);
    this.numero = this.aleatorio;
    this.puntos = "*".repeat(this.numero);
  }
}
