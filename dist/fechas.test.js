"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fechas_1 = require("./fechas");
const ava_1 = require("ava");
const usuario_1 = require("./usuario");
(0, ava_1.default)("diasdesde calcula correctamente la diferencia en dias", (t) => {
    const hoy = new Date();
    const ayer = new Date();
    ayer.setDate(hoy.getDate() - 1);
    const resultado = (0, fechas_1.diasDesde)(ayer);
    t.is(resultado, "Hace 1 dias");
});
(0, ava_1.default)("comprobando si funciona el  'true'test", (t) => {
    const usuario = new usuario_1.Usuario();
    const fechacompra = new Date("2024-10-21");
    usuario.agregarFechaCompra(fechacompra);
    const resultado = usuario.obtenerUltimaCompra();
    t.is(resultado.getTime(), fechacompra.getTime());
});
