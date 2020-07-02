import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olacomp',
  templateUrl: './olacomp.component.html',
  styleUrls: ['./olacomp.component.css']
})
export class OlacompComponent implements OnInit {

  constructor() { }

  titulo:string = 'Meu primeiro componente.';

  dados:string;

  imgUrl:string = "/assets/teste.jpg";

  mostrarImagem = true;


  ngOnInit(): void {
  }

  executar(): void {
    this.titulo = this.dados;
  }

}
