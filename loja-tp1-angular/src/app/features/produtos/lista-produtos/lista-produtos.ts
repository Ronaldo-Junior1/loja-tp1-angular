import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Ronaldo',
      descricao: 'Eu',
      preco: 66.6,
      imageUrl: 'images/logoifsp.png',
      promo:true,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Jonas',
      descricao: 'Um garoto bem sapeca',
      preco: 77.7,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'José',
      descricao: 'Do vale',
      preco: 24,
      estado: 'esgotado'
    }
]

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo) : this.produtos);

  alternarPromo(){
    this.apenasPromo.update(p=>!p);
  }
  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto: ${produto.id}, Quantidade: ${produto.quantity}`);
  }

  onViewProduct(id:number){
    alert(`Id do produto: ${id}`);
  }
}
