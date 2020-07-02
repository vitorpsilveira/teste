import { Component, OnInit } from '@angular/core';
import { ImovelModel } from 'src/app/services/imoveis-api/imovel-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api/imoveis-api.service';

@Component({
  selector: 'app-imovel-page',
  templateUrl: './imovel-page.component.html',
  styleUrls: ['./imovel-page.component.css']
})
export class ImovelPageComponent implements OnInit {

  listaImoveis: ImovelModel[];

  constructor(private imovelApi:ImoveisApiService) { }

  ngOnInit(): void {
    this.imovelApi.List().subscribe((lista) =>{
      this.listaImoveis = lista;
    })
  }

}
