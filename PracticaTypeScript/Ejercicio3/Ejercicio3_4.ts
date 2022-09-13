function greet(greeting: string = 'Hola'): string {
    return greeting.toUpperCase();
}

const defaultGreeting: string = greet();
const portugueseGreeting: string = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', `Defaultgreeting: ${defaultGreeting}, Portuguese: ${portugueseGreeting}`);