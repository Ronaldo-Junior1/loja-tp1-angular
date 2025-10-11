export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageUrl?: string;
    promo?: boolean;
    estado?: 'novo' | 'usado' | 'esgotado';
}


const estados = ['novo','usado','esgotado'] as const;
export class ProdutoMapper{
    static fromJson(json: any): Produto{
        let _estado = estados[Math.floor(Math.random() * estados.length)];
        return{
            id:json.id,
            nome: json.title,
            preco: json.price,
            descricao: json.description,
            imageUrl: json.image,
            estado: _estado,
            promo: json.id % 5 == 0 && _estado != 'esgotado'
        }
    }

    static toJson(produto:Produto): any{
        return{
            id: produto.id,
            title: produto.nome,
            price: produto.preco,
            description: produto.descricao,
            image: produto.imageUrl,
            category: 'general'
        }
    }
}