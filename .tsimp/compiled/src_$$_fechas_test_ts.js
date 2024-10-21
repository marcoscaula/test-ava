"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fechas_1 = require("./fechas");
const ava_1 = __importDefault(require("ava"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVjaGFzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWFyY28vRG9jdW1lbnRzL3Zpc3VhbG51ZXZvL3Rlc3RhdmEvc3JjLyIsInNvdXJjZXMiOlsiZmVjaGFzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQXVCO0FBQ3ZCLHVDQUFvQztBQUVwQyxJQUFBLGFBQUksRUFBQyx1REFBdUQsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2hFLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxNQUFNLFNBQVMsR0FBRyxJQUFBLGtCQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFDRixJQUFBLGFBQUksRUFBQyx3Q0FBd0MsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNoRCxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUVwRCxDQUFDLENBQUMsQ0FBQSJ9