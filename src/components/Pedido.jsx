import Producto from './Producto';

const estados = ['Pending', 'Shipped', 'Delivered'];

export default function Pedido({ pedido }) {
   return (
      <tr>
         <td>{pedido.id}</td>
         <td>{pedido.cliente}</td>
         <td>{pedido.fecha.toLocaleString()}</td>
         <td>{estados[pedido.estado]}</td>
         <td>
            <ul>
               {pedido.productos.map((prod, index) => (
                  <Producto key={index} producto={prod} />
               ))}
            </ul>
         </td>
      </tr>
   );
}
