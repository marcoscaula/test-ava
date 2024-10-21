"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const fechas_1 = require("./fechas");
class Usuario {
    fechasCompra;
    constructor() {
        this.fechasCompra = [];
    }
    agregarFechaCompra(fechaCompra) {
        this.fechasCompra.push(fechaCompra);
    }
    obtenerUltimaCompra() {
        return this.fechasCompra[this.fechasCompra.length - 1];
    }
    diasDesdeLaUltimaCompra() {
        const ultimacompra = this.obtenerUltimaCompra();
        const diasDesdeLaUltimaCompra = (0, fechas_1.diasDesde)(ultimacompra);
        return diasDesdeLaUltimaCompra;
    }
}
exports.Usuario = Usuario;
