// ============================================================
// 02-logica_negocio.js — 20 Katas del Mundo Real
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// GESTIÓN DE USUARIOS (Katas 21-25)
// ─────────────────────────────────────────────

// Kata 21: Usuario
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

// Kata 22: Admin
class Admin extends Usuario {
  constructor(nombre, email) {
    super(nombre,email);
  }

  banearUsuario(usuario) {
    return `El usuario ${usuario.nombre} fue baneado por ${this.nombre}`;
  };
}

// Kata 23: Suscripcion
class Suscripcion {
  #plan;
  #vencimiento;

  constructor(plan, vencimiento) {
    this.#plan = plan;
    this.#vencimiento = vencimiento;
  }

  renovar(diasExtra) {
    this.#vencimiento += diasExtra;
  }

  get plan() {
   return this.#plan;
  }

  get vencimiento() {
    return this.#vencimiento;
  }
}

// Kata 24: Perfil
class Perfil {
  constructor(datos) {
    this.datos = datos;
  }

  actualizarDatos(nuevosDatos) {
    this.datos = {...this.datos, ...nuevosDatos};
  }
}

// Kata 25: Auth
class Auth {
  #usuarios;

  constructor() {
    this.#usuarios = [];
  }

  registrar(nombre, email, password) {
    this.#usuarios.push({nombre, email, password});
  }

  login(email, password) {
    const usuario = this.#usuarios.find(u => u.email === email && u.password === password);
    return usuario ? "Login exitoso" : "Credenciales inválidas";
  }
}

// ─────────────────────────────────────────────
// EL VIDEOJUEGO RPG (Katas 26-30)
// ─────────────────────────────────────────────

// Kata 26 y 28: Personaje
class Personaje {
  constructor(nombre, hp, ataque) {
    this.nombre = nombre;
    this.hp = hp;
    this.ataque = ataque;
  }

  atacar(objetivo) {
    this.objetivo = objetivo;
    this.objetivo.hp -= this.ataque;
  }
}

// Kata 27: Enemigo
class Enemigo {
  #loot;

  constructor(nombre, hp, ataque, loot) {
    this.nombre = nombre;
    this.hp = hp;
    this.ataque = ataque;
    this.#loot = loot;
  }

  atacar(objetivo) {
    objetivo.hp -= this.ataque;
  }

  morir() {
    return this.#loot;
  }
}

// Kata 29: Inventario
class Inventario {
  constructor() {
    this.item = [];
  }

  agarrarItem(item) {
    this.item.push(item);
  }

  usarItem(nombre, personaje) {
    const item = this.item.find(i => i.nombre === nombre);
    if (item) item.usar(personaje);
  }
}

// Kata 30: Pocion
class Pocion {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  usar(personaje) {
    personaje.hp += this.cantidad;
  }
}

// ─────────────────────────────────────────────
// EL E-COMMERCE (Katas 31-35)
// ─────────────────────────────────────────────

// Kata 31 y 32: Producto
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad) {
    if (this.stock >= cantidad) {
      this.stock -= cantidad;
    }
  }
}

// Katas 33-35: Carrito
class Carrito {
  #productos;
  #descuento;

  constructor() {
    this.#productos = [];
    this.#descuento = 0;
  }

  agregar(producto, cantidad = 1) {
    this.#productos.push({producto, cantidad});
  }

  calcularTotal() {
    return this.#productos.reduce((total, item) => total + item.producto.precio * item.cantidad,0) * (1 - this.#descuento);
  }


  aplicarCupon(codigo) {
    this.codigo = codigo;
    if (this.codigo === "DESCUENTO10") {
      this.#descuento = 0.10;
    } else if (this.codigo === "DESCUENTO20") {
      this.#descuento = 0.20;
    } else {
      this.#descuento = 0;
    }

  }

  get productos() {
    return this.#productos;
  }
}

// ─────────────────────────────────────────────
// EL RESTAURANTE (Katas 36-40)
// ─────────────────────────────────────────────

// Kata 36: Mesa
class Mesa {
  constructor(numero, capacidad) {
    this.numero = numero;
    this.capacidad = capacidad;
  }
}

// Katas 37 y 38: Pedido
class Pedido {
  #platos;

  constructor(mesa) {
    this.mesa = mesa;
    this.#platos = [];
  }

  agregarPlato(nombre, precio) {
    this.#platos.push({nombre, precio});
  }

  cerrarMesa() {
    return this.#platos.reduce((total, plato) => total + plato.precio,0);
  }

  get platos() {
    return this.#platos;
  }
}

// Katas 39 y 40: Restaurante
class Restaurante {
  constructor() {
    this.restaurante = [];
  }

  agregarMesa(mesa) {
    this.restaurante.push({mesa});
  }

  buscarMesaLibre(comensales) {
    this.comensales = comensales;
    return this.restaurante.find(m => m.mesa.capacidad >= this.comensales);
  }

  cerrarCuenta(total) {
    this.total = total;
    return `El total a pagar es: ${this.total}`;
  }

  recaudacionDelDia() {
    return this.recaudacionDelDia = this.restaurante.reduce((total, m) => total + m.total(), 0);
  }
}

module.exports = {
  Usuario,
  Admin,
  Suscripcion,
  Perfil,
  Auth,
  Personaje,
  Enemigo,
  Inventario,
  Pocion,
  Producto,
  Carrito,
  Mesa,
  Pedido,
  Restaurante,
};
