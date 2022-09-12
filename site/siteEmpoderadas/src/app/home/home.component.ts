import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos';
import { HomeServiceService } from './homeService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : HomeServiceService) { }

  public produtos : Produtos[];
  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos(){
    this.service.getProdutos().subscribe(
      (produtos : Produtos[])=> {
        this.produtos = produtos;
        console.log(this.produtos);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };
}
