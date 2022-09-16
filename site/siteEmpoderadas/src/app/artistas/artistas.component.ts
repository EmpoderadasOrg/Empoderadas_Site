import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artistas } from '../models/Artistas';
import { Produtos } from '../models/produtos';
import { ArtistasService } from './artistas.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  constructor(private service : ArtistasService, private route: ActivatedRoute) { }

  artistas : Artistas;
  produtos: Produtos[];
  id : any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.carregarArtistas(this.id);
    this.carregarProdutoByArtista(this.id);
  }

  carregarArtistas(id : any){
    this.service.getArtistasById(id).subscribe(
      (artistas : Artistas)=> {
        this.artistas = artistas;
        console.log(this.artistas);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };


  carregarProdutoByArtista(id : any){
    this.service.getProdutosByUser(id).subscribe(
      (produtos : Produtos[])=> {
        this.produtos = produtos;
        console.log(this.produtos);
      },
      (erro: any) =>{
        console.error(erro);
      }
    )
  };

  redirecionarShoope(linkUrl : string){
    var win = window.open(linkUrl, '_blank');
    win?.focus();
  }

}
