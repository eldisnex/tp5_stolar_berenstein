import "./App.css";
import TablaPedidos from "./components/TablaPedidos";
import Filters from "./components/Filters";
import FilterContext, { FilterContextProvider } from "./context/FilterContext";
import Stats from "./components/Stats";
import Form from "./components/Form";
import useLocalStorage from "./hooks/useLocalStorage";
import { statusIndexFromName } from "./constants/orderStatus";



function App() {
  const [pedidos, setPedidos, removePedidos] = useLocalStorage("pedidos", () => []);
    const handleAddPedido = ({ cliente, date, status, products }) => {
    const nextId = pedidos.reduce((maxId, p) => (p.id > maxId ? p.id : maxId), -1) + 1;
    const estadoIndex = statusIndexFromName(status);
    const fecha = date ? new Date(date) : new Date();
    const productos = (products || []).map((p) => ({
      nombre: p.nombre,
      cantidad: p.cantidad === "" ? 0 : Number(p.cantidad),
      precio: p.precio === "" ? 0 : Number(p.precio),
    }));
    const nuevo = { id: nextId, cliente, fecha, estado: estadoIndex, productos };
    setPedidos((prev) => [...prev, nuevo]);
  };
  const handleDeletePedido = (id) => {
    setPedidos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClearAll = () => {
    removePedidos();
    setPedidos([]);
  };

  return (
    <FilterContextProvider>
      <Form onAdd={handleAddPedido} />
      <Stats pedidos={pedidos} />
      <Filters />
      <section className="pedidos">
        <TablaPedidos pedidos={pedidos} onDelete={handleDeletePedido} onClearAll={handleClearAll} />
      </section>
    </FilterContextProvider>
  );
}

export default App;
