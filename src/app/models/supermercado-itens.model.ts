// Define a classe SupermercadoItens que representa um item do supermercado
export class SupermercadoItens {
  constructor(
    // O identificador único do item
    public id: number,
    // O nome do item
    public nome: string,
    // Indica se o item foi comprado ou não, valor padrão é falso
    public comprado: boolean = false
  ) {}
}
