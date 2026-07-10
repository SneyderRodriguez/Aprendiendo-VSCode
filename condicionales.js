//! if básico  → Condicionales 
let totalPedido = 20000;
if (totalPedido > 50000){
    console.log("Domi gratis 💖");  
};
//! if con else 
let totalPedido2 = 30000;
if (totalPedido2 > 50000) {
  console.log("Domicilio GRATIS 🎉");
} else {
  console.log("Domicilio: $5.000");
};

//else if
let totalPedido3 = 90000;

if (totalPedido3 > 80000) {
  console.log("Domicilio GRATIS + bono 🎁");
} else if (totalPedido3 > 50000) {
  console.log("Domicilio GRATIS 🎉");
} else {
  console.log("Domicilio: $5.000");
};

//while
let repartidoresLibres = 1;

while (repartidoresLibres <= 3) {
  console.log("Repartidor #" + repartidoresLibres + " disponible");
  repartidoresLibres = repartidoresLibres + 1;
};

//for
for (let i = 1; i <= 3; i++) {
  console.log("Empacando producto #" + i);
};

let carrito = ["Arroz", "Pollo", "Gaseosa"];

for (let i = 0; i < carrito.length; i++) {
  console.log("Producto: " + carrito[i]);
};

let carrito2 = [
  { nombre: "Arroz", precio: 8000 },
  { nombre: "Pollo", precio: 25000 },
  { nombre: "Gaseosa", precio: 6000 }
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito2[i].precio > 20000) {
    console.log(carrito2[i].nombre + " es un producto caro 💰");
  } else {
    console.log(carrito2[i].nombre + " tiene buen precio ✅");
  }
};