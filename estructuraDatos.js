//Arrays

let carrito = ["Pizza", "Gaseosa", "Postre"];
console.log(carrito);
let carrito2 = [15, true, "Postre"];
console.log(carrito2);

console.log(carrito2 [0]);
console.log(carrito2 [1]);

carrito.push("Arroz Chino");//.push agrega item al array
console.log(carrito);

carrito.pop(); //.pop elimina la ultima posición del array
console.log(carrito);

carrito[4] = "Helado"; //reemplaza la posición escogida
console.log(carrito);

console.log(carrito.length);

//! Objetos
let cliente = {
  nombre: "Andrés",
  edad: 30
};
console.log(cliente);
console.log(cliente.nombre);   
console.log(cliente.edad);   

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }
cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }
delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }