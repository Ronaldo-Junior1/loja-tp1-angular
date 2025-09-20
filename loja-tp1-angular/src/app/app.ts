import { Component, signal } from '@angular/core';
import { Header } from "./core/header/header";
import { Footer } from "./core/footer/footer";
import { Banner } from "./core/banner/banner";
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { CardProduto } from "./features/produtos/card-produto/card-produto";
import { Produto } from './model/produto';
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  sobre?: string;

  qtd = signal(1);

  receberSobre(texto: string){
    this.sobre = texto;
  }
}
