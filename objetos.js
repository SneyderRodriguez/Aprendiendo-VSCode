const estudiante = {
  nombre: "Carlos",
  nota:   3.5
};

// 📖 Leer
console.log("Nota inicial:", estudiante.nota);    // 3.5

// ✏️ Modificar propiedad existente
estudiante.nota = 4.2;
console.log("Nota actualizada:", estudiante.nota); // 4.2

// ➕ Agregar propiedad nueva
estudiante.aprobado = true;
console.log("¿Aprobado?", estudiante.aprobado);   // true

// 🗑️ Eliminar propiedad
delete estudiante.nota;
console.log("Nota después de eliminar:", estudiante.nota); // undefined
//=================================================================================================
const auto = {
  marca:  "Renault",
  modelo: "Logan"
};

let campo = "modelo";
console.log(auto[campo]);    // "Logan"
console.log(auto["marca"]);  // "Renault"
//=================================================================================================
const auto = {
  gasolina: 100,
  conducir() {
    this.gasolina -= 10;
    return `Gasolina restante: ${this.gasolina}%`;
  }
};
console.log(auto.conducir());
console.log(auto.conducir());
//=================================================================================================
const cuentaBancaria = {
  titular:  "Valentina Ríos",
  numero:   "001-234-567",
  saldo:    500000,
  tipo:     "Ahorros",

  depositar(monto) {
    if (monto <= 0) return "❌ Monto inválido";
    this.saldo += monto;
    
    return `✅ Depósito OK. Saldo: $${this.saldo.toLocaleString ()}`;
  },

  retirar(monto) {
    if (monto > this.saldo) return "❌ Saldo insuficiente";
    this.saldo -= monto;
    return `✅ Retiro OK. Saldo: $${this.saldo.toLocaleString()}`;
  },

  verResumen() {
    return `Cuenta: ${this.tipo} | Titular: ${this.titular} | Saldo: $${this.saldo.toLocaleString()}`;
  }
};

console.log(cuentaBancaria.depositar(150000));
console.log(cuentaBancaria.retirar(900000));
console.log(cuentaBancaria.retirar(200000));
console.log(cuentaBancaria.verResumen());
// ═══════════════════════════════════════════════════
// OBJETO PRODUCTO — propiedades + métodos completos
// ═══════════════════════════════════════════════════
const producto = {
  // ── PROPIEDADES ────────────────────────────────
  nombre:     "Auriculares Bluetooth",
  precio:     180000,
  stock:      20,
  categoria:  "Electrónica",
  descuento:  0,

  // ── MÉTODOS ────────────────────────────────────
  estaDisponible() {
    return this.stock > 0;
  },

  aplicarDescuento(porcentaje) {
    this.descuento = porcentaje;
    const precioFinal = this.precio * (1 - porcentaje / 100);
    return `Precio con ${porcentaje}% desc: $${precioFinal.toLocaleString()}`;
  },

  vender(cantidad) {
    if (cantidad > this.stock)
      return `❌ Solo hay ${this.stock} unidades`;
    this.stock -= cantidad;
    return `✅ Vendido: ${cantidad} ud. Stock restante: ${this.stock}`;
  },

  ficha() {
    return `📦 ${this.nombre} [${this.categoria}] - $${this.precio.toLocaleString()} | Stock: ${this.stock}`;
  }
};

// ── USO DEL OBJETO ──────────────────────────────
console.log(producto.ficha());
console.log("¿Disponible?", producto.estaDisponible());
console.log(producto.aplicarDescuento(15));
console.log(producto.vender(5));
console.log(producto.vender(25));