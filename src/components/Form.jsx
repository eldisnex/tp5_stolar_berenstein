import { useState } from "react";
import "./Form.css";

export default function Form({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [cliente, setCliente] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("pending");

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

    if (cliente.trim().length < 3) {
      alert("El nombre del cliente debe tener al menos 3 caracteres");
      return;
    }

    const invalidQty = products.some((p) => Number(p.cantidad) <= 0);
    if (invalidQty) {
      alert("Cada producto debe tener cantidad mayor a 0");
      return;
    }

    const finalStatus = status || "pending";
    const finalDate = date || new Date().toISOString();

    const formData = {
      cliente,
      date: finalDate,
      status: finalStatus,
      products,
    };

    if (typeof onAdd === "function") {
      onAdd(formData);
      setCliente("");
      setDate("");
      setStatus("pending");
      setProducts([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-row">
        <p>Cliente:</p>
        <input
          className="form-input"
          type="text"
          name="cliente"
          id="cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>

      <div className="form-row">
        <p>Fecha:</p>
        <input
          className="form-input"
          type="datetime-local"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-row">
        <p>Estado:</p>
        <select
          className="form-select"
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="shipped">Shipped</option>
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <div className="form-row">
        <p>Productos:</p>
        <button type="button" className="btn btn-secondary" onClick={handleAddProduct}>
          Agregar producto
        </button>
      </div>

      <div className="products">
        {products.map((product, i) => (
          <div key={i} className="product-row">
            <input
              className="form-input"
              type="text"
              name={`nombre-${i}`}
              placeholder="Nombre"
              value={product.nombre}
              onChange={(e) => handleProductChange(i, "nombre", e.target.value)}
            />
            <input
              className="form-number"
              type="number"
              name={`cantidad-${i}`}
              placeholder="Cantidad"
              value={product.cantidad}
              onChange={(e) => handleProductChange(i, "cantidad", e.target.value)}
            />
            <input
              className="form-number"
              type="number"
              name={`precio-${i}`}
              placeholder="Precio"
              value={product.precio}
              onChange={(e) => handleProductChange(i, "precio", e.target.value)}
            />
            <button type="button" className="btn btn-danger" onClick={() => handleRemoveProduct(i)}>
              -
            </button>
          </div>
        ))}
      </div>

      <div className="form-row">
        <p></p>
        <button className="btn btn-primary" type="submit">Enviar!</button>
      </div>
    </form>
  );
}
