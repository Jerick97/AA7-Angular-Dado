import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  numero : number = 1;
  puntos : string = "*".repeat(this.numero)
  constructor() { }

  ngOnInit(): void {
  }

}
