console.log('Hola mundo! Esto es Typescript');

// Variables:

// [TIPADO DÉBIL] → Sin añadir el tipo de dato utilizado
let texto = 'Hola mundo! Esto es Typescript';
console.log(`${texto}... texto añadido desde una variable!`);

// [TIPADO FUERTE] → Añadiendo el tipo de dato
let textoDos: string = 'Hola mundo! Esto es Typescript';
console.log(`${textoDos}... añadiendo el tipo de dato!`);

// textoDos = 2;
// console.log(`${textoDos}... cambiandole a un tipo de dato erroneo!`);
