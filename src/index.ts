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

// Enum's:
enum Ejemplo {
	'completo',
	'incompleto',
}

let ejemploEnum: Ejemplo = Ejemplo.completo;
console.log('Ejemplo enum:', ejemploEnum);

// Interfaces:
interface DatoPersonal {
	nombre: string;
	edad: number;
	nacionalidad: string;
}

let miDato: DatoPersonal = {
	nombre: 'Gustavo',
	edad: 22,
	nacionalidad: 'argentino',
};
console.log('Estos son mis datos:', miDato);

// Types:
type Producto = {
	nombre: string;
	precio: number;
};

let miProducto: Producto = {
	nombre: 'Arroz',
	precio: 450,
};
console.log('Este es mi producto', miProducto);

// Condicionales:

// Ternarios
console.log(10 + 5 === 15 ? 'Es igual a 15' : 'No es iguala 15');

// If's
if (10 + 5 === 15) {
	console.log('10 + 5 es igual a 15.. en el if!');
} else {
	console.log('Otro resultado');
}

// Switch
switch (10 + 5) {
	case 15:
		console.log('Es igual a 15... en el switch!');
		break;
	default:
		break;
}
