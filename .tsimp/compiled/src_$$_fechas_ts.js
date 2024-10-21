"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diasDesde = diasDesde;
function diasDesde(fecha) {
    const hoy = new Date();
    const fechaPasada = new Date(fecha);
    const diferencia = hoy.getTime() - fechaPasada.getTime();
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return `Hace ${dias} dias`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVjaGFzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21hcmNvL0RvY3VtZW50cy92aXN1YWxudWV2by90ZXN0YXZhL3NyYy8iLCJzb3VyY2VzIjpbImZlY2hhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlRLDhCQUFTO0FBWmpCLFNBQVMsU0FBUyxDQUFDLEtBQVU7SUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxPQUFPLFFBQVEsSUFBSSxPQUFPLENBQUM7QUFDL0IsQ0FBQyJ9