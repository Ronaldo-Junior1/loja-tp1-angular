import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Ronaldo',
      descricao: 'Eu',
      preco: 66.6,
      imageUrl: 'images/logoifsp.png',
      estado: 'novo',
      categoria: 'Eletronico'
    },
    {
      id: 2,
      nome: 'Jonas',
      descricao: 'Um garoto bem sapeca',
      preco: 77.7,
      promo:true,
      estado: 'usado',
      categoria: 'Eletronico'
    },
    {
      id: 3,
      nome: 'José',
      descricao: 'Do vale',
      preco: 24,
      estado: 'esgotado',
      categoria: 'Arco iris'
    }
  ]

  listar(): Observable<Produto[]>{
    this.logger.info('[ProdutoService] - Listando produtos');
    return of(this.listaMock).pipe(delay(1000));
  }
}
