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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tYXJjby9Eb2N1bWVudHMvdmlzdWFsbnVldm8vdGVzdGF2YS9zcmMvIiwic291cmNlcyI6WyJ1c3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUVyQyxNQUFNLE9BQU87SUFDVCxZQUFZLENBQVM7SUFDckI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsV0FBaUI7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUNELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsdUJBQXVCO1FBQ25CLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE1BQU0sdUJBQXVCLEdBQUcsSUFBQSxrQkFBUyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztDQUdKO0FBQ08sMEJBQU8ifQ==