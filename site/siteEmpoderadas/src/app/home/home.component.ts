import { Component, OnInit } from '@angular/core';
import { Artistas } from '../models/Artistas';
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
  public artistas : Artistas[];
  ngOnInit() {
    this.carregarProdutos();
    this.carregarArtistas();
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

  carregarArtistas(){
    this.service.getArtistas().subscribe(
      (artistas : Artistas[])=> {
        this.artistas = artistas;
        console.log(this.artistas);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };
}
