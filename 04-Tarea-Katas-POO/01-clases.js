// ============================================================
// 01-clases.js — 20 Katas de Estructuras y Lógica Pura
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// FUNDAMENTOS DE CLASE (Katas 1-5)
// ─────────────────────────────────────────────

// Kata 1: Contador
class Contador {
  constructor() {
    this.contador = 0;
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  reset() {
    this.contador = 0;
  }
}

// Kata 2: Calculadora
class Calculadora {
  sumar(a, b) {
    this.resultado = a + b;
    return this.resultado;
  }

  restar(a, b) {
    this.resta = a - b;
    return this.resta;
  }

  multiplicar(a, b) {
    this.multiplicar = a * b;
    return this.multiplicar;
  }

  dividir(a, b) {
    this.dividir = a / b;
    return this.dividir;
  }
}

// Kata 3: Validador
class Validador {
  esEmail(valor) {
    this.valor = valor;
    return this.valor.includes("@");
  }

  esPasswordFuerte(valor) {
    this.esPasswordFuerte = valor;
    return this.esPasswordFuerte.length >= 8;
  }
}

// Kata 4: Conversor
class Conversor {
  celsiusAFahrenheit(celsius) {
    this.celsius= celsius;
    return (this.celsius * 9) / 5 + 32;
  }

  kmAMillas(km) {
    this.km = km;
    return this.km * 0.621371;
  }
}

// Kata 5: Generador
class Generador {
  numeroAleatorio(min, max) {}
}

// ─────────────────────────────────────────────
// ENCAPSULAMIENTO Y PRIVACIDAD (Katas 6-10)
// ─────────────────────────────────────────────

// Kata 6 y 7: CuentaBancaria
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
    }
    }

  get saldo() {
    return this.#saldo;
  }
};

// Kata 8: Termostato
class Termostato {
  #temperatura;

  constructor(temperaturaInicial = 20) {
    this.#temperatura = temperaturaInicial;
  }

  get temperatura() {
    return this.#temperatura;
  }

  set temperatura(valor) {
    this.#temperatura = valor;
  }
}

// Kata 9: Reloj
class Reloj {
  #hora;
  #minuto;

  constructor(hora = 0, minuto = 0) {
    this.#hora = hora;
    this.#minuto = minuto;
  }

  avanzarMinuto() {
    this.#minuto++;
    if (this.#minuto >= 60) {
      this.#minuto = 0;
      this.#hora++;
    } else if (this.#hora >= 24) {
      this.#hora = 0;
    };
  };

  get hora() {
    return this.#hora;
  }

  get minuto() {
    return this.#minuto;
  }
}

// Kata 10: CajaFuerte
class CajaFuerte {
  #password;
  #secreto;

  constructor(password, secreto) {
    this.#password = password;
    this.#secreto = secreto;
  }

  abrir(intento) {
    if (intento === this.#password) {
      return this.#secreto;
    } else {
      return "Acceso Denegado";
    };
  };
};

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: PILA / STACK - LIFO (Katas 11-15)
// ─────────────────────────────────────────────

// Katas 11-15: Pila
class Pila {
  #items;

  constructor() {
    this.#items = [];
  }

  apilar(elemento) {
    this.#items.push(elemento);
  }

  desapilar() {
    this.#items.pop();
  }

  verTope() {
    return this.#items[this.#items.length - 1];
  }

  estaVacia() {
    return this.#items.length === 0;
  }
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: COLA / QUEUE - FIFO (Katas 16-20)
// ─────────────────────────────────────────────

// Katas 16-20: Cola
class Cola {
  #elementos;

  constructor() {
    this.#elementos = [];
  }

  encolar(elemento) {
    this.#elementos.push(elemento);
  }

  desencolar() {
    return this.#elementos.shift();
  }

  frente() {
    return this.#elementos[0];
  }

  tamano() {
    return this.#elementos.length;
  }
};

module.exports = {
  Contador,
  Calculadora,
  Validador,
  Conversor,
  Generador,
  CuentaBancaria,
  Termostato,
  Reloj,
  CajaFuerte,
  Pila,
  Cola,
};
