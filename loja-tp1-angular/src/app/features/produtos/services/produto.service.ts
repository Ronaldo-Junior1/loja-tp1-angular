import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { delay, Observable, of, catchError,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  http = inject(HttpClient);
  apiURL = 'https://fakestoreapi.com/products'

  listar(): Observable<Produto[]>{
    this.logger.info('[ProdutoService] - Listando produtos');
    return this.http.get<any[]>(this.apiURL).pipe(
      map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
      catchError(err => of([]))
    );
  }

  getById(id:number): Observable<Produto | undefined>{
    return of(); // EXERCICIO
    // return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
  }

  criar(produto: Produto): Observable<any>{
    let body = {
      title: produto.nome,
      price: produto.preco,
      description: produto.descricao,
      image: produto.imageUrl,
      category: produto.categoria
    }
    return this.http.post(this.apiURL,body);
  }
}
