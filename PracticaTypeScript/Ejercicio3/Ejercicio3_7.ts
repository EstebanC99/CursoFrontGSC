const numberCollection: number[] = [];
const stringCollection: string[] = [];
const booleanCollection: boolean[] = [];
const arrayCollection: [][] = [];

function pushToCollection<TItem>(item: TItem, collection: TItem[]): TItem[] {
    collection.push(item);
    return collection;
}

// Descomentar para ver error
//pushToCollection(false, stringCollection);
pushToCollection(false, booleanCollection);

// Descomentar para ver error
//pushToCollection('hi', booleanCollection);
pushToCollection('hi', stringCollection);

// Descomentar para ver error
//pushToCollection([], stringCollection);
pushToCollection([], arrayCollection);

// Descomentar para ver error
//pushToCollection('1', numberCollection);
pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);

const incrementedByTwo: number[] = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);