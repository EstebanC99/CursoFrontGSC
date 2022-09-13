function layEggs(quantity: number = 0, color: string = 'blanco'): void {
    console.log(
        `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);
}

layEggs();
layEggs(1);
layEggs(2, 'rojo');