import { useContext } from 'react';
import Pedido from './Pedido';
import FilterContext from '../context/FilterContext';

export default function TablaPedidos({ pedidos }) {
   const { state } = useContext(FilterContext);
   return (
      <table className='pedidos-tabla'>
         <thead>
            <tr>
               <th>Id</th>
               <th>Cliente</th>
               <th>Fecha</th>
               <th>Estado</th>
               <th>Productos</th>
            </tr>
         </thead>
         <tbody>
            {pedidos.map(
               (pedido, index) =>
                  state[pedido.estado] && <Pedido key={index} pedido={pedido} />
            )}
         </tbody>
      </table>
   );
}
