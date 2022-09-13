function agregarAlCarro(item: ICarItem) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
}

interface ICarItem {
    id: number;
    titulo: string;
    idVariante?: number;
}

agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });