import { useContext } from "react";
import Pedido from "./Pedido";
import FilterContext from "../context/FilterContext";
import "./TablaPedidos.css";

export default function TablaPedidos({ pedidos, onDelete, onClearAll }) {
  const { state } = useContext(FilterContext);
  return (
    <div className="table-card">
    <div className="table-actions">
      <button className="btn btn-danger" onClick={onClearAll}>Borrar todos</button>
    </div>
    <table className="pedidos-tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Cliente</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Productos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido, index) =>
          state[pedido.estado] && (
            <Pedido key={index} pedido={pedido} onDelete={() => onDelete?.(pedido.id)} />
          )
        )}
      </tbody>
    </table>
    </div>
  );
}
