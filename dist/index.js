"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
function main() {
    const user = new usuario_1.Usuario();
    user.agregarFechaCompra(new Date("2024,10,15"));
    console.log(user.obtenerUltimaCompra());
    console.log(user.diasDesdeLaUltimaCompra());
}
main();
