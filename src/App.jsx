import './App.css';
import TablaPedidos from './components/TablaPedidos';
import Filters from './components/Filters';
import FilterContext, { FilterContextProvider } from './context/FilterContext';
import Stats from './components/Stats';

const pedidos = [
   {
      id: 0,
      cliente: 'Meskin',
      fecha: new Date(),
      estado: 1,
      productos: [
         {
            nombre: 'Brian',
            cantidad: 2,
            precio: 5
         }
      ]
   },
   {
      id: 1,
      cliente: 'Meskin',
      fecha: new Date(),
      estado: 1,
      productos: [
         {
            nombre: 'Brian',
            cantidad: 2,
            precio: 5
         }
      ]
   }
];

function App() {
   return (
      <FilterContextProvider>
         <Stats pedidos={pedidos} />
         <Filters />
         <section className='pedidos'>
            <TablaPedidos pedidos={pedidos} />
         </section>
      </FilterContextProvider>
   );
}

export default App;
