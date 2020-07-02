import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnInit {

  imgUrl:string = "https://mullerimoveisrj.com.br/wp-content/uploads/2017/08/A1-3.jpg";

  address = 'Cabo Frio - RJ';

  price = 5000000;

  owner = "João Garcia";

  type = "Venda";

  constructor() { }

  ngOnInit(): void {
  }

}
