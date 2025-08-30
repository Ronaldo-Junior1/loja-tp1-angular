import { Component } from '@angular/core';
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
      promo:true
    },
    {
      id: 2,
      nome: 'Jonas',
      descricao: 'Um garoto bem sapeca',
      preco: 77.7
    },
    {
      id: 3,
      nome: 'José',
      descricao: 'Do vale',
      preco: 24
    }
]

  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto: ${produto.id}, Quantidade: ${produto.quantity}`)
  }

}
