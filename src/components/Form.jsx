import { useState } from "react";

export default function Form() {
  const [products, setProducts] = useState([]);
  const [cliente, setCliente] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("shipped");

  const handleAddProduct = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { nombre: "", cantidad: "", precio: "" },
    ]);
  };

  const handleRemoveProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleProductChange = (index, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      cliente,
      date,
      status,
      products,
    };

    console.log("Formulario enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Cliente:</p>
      <input
        type="text"
        name="cliente"
        id="cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />

      <p>Fecha:</p>
      <input
        type="datetime-local"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <p>Estado:</p>
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="shipped">Shipped</option>
        <option value="pending">Pending</option>
        <option value="delivered">Delivered</option>
      </select>

      <p>Productos:</p>
      <button type="button" onClick={handleAddProduct}>
        Agregar producto
      </button>

      {products.map((product, i) => (
        <div key={i}>
          <input
            type="text"
            name={`nombre-${i}`}
            placeholder="Nombre"
            value={product.nombre}
            onChange={(e) => handleProductChange(i, "nombre", e.target.value)}
          />
          <input
            type="number"
            name={`cantidad-${i}`}
            placeholder="Cantidad"
            value={product.cantidad}
            onChange={(e) => handleProductChange(i, "cantidad", e.target.value)}
          />
          <input
            type="number"
            name={`precio-${i}`}
            placeholder="Precio"
            value={product.precio}
            onChange={(e) => handleProductChange(i, "precio", e.target.value)}
          />
          <button type="button" onClick={() => handleRemoveProduct(i)}>
            -
          </button>
        </div>
      ))}

      <button type="submit">Enviar!</button>
    </form>
  );
}
