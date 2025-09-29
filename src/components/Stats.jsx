import { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import './Stats.css';

export default function Stats({ pedidos }) {
   const { labels } = useContext(FilterContext);
   const quantities = pedidos.reduce(
      (acc, p) => {
         acc[p.estado] = (acc[p.estado] || 0) + 1;
         return acc;
      },
      [0, 0, 0]
   );
   return (
      <div className="stats-card">
         <p>Total de pedidos: {pedidos.length}</p>
         {labels.map((l, i) => (
            <p key={l}>
               Total {l}: {quantities[i]}
            </p>
         ))}
      </div>
   );
}
