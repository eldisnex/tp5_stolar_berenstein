import Producto from "./Producto";
import { ORDER_STATUS, statusIndexFromName } from "../constants/orderStatus";
import "./Pedido.css";

export default function Pedido({ pedido, onDelete }) {
  return (
    <tr>
      <td>{pedido.id}</td>
      <td>{pedido.cliente}</td>
      <td>{new Date(pedido.fecha).toLocaleString()}</td>
      <td>
         <select
           defaultValue={ORDER_STATUS[pedido.estado]}
           onChange={(e) => {
             try {
               const selected = e.target.value;
               const idx = statusIndexFromName(selected);
               const raw = window.localStorage.getItem("pedidos");
               const list = raw ? JSON.parse(raw) : [];
               const updated = list.map((p) =>
                 p.id === pedido.id ? { ...p, estado: idx } : p
               );
               window.localStorage.setItem("pedidos", JSON.stringify(updated));
               window.location.reload();
             } catch {}
           }}
         >
          {ORDER_STATUS.map((e) => (
             <option key={e} value={e} id={e}>
              {e}
            </option>
          ))}
        </select>
      </td>
      <td>
        <ul className="pedido-products">
          {pedido.productos.map((prod, index) => (
            <Producto key={index} producto={prod} />
          ))}
        </ul>
      </td>
         <td>
            <button className="btn btn-danger" onClick={onDelete}>Borrar</button>
         </td>
    </tr>
  );
}
