import './Producto.css';

export default function Producto({ producto }) {
   return (
      <li className="product-item">
         <span>Articulo: {producto.nombre}</span>
         <span>Cantidad: {producto.cantidad}</span>
         <span>Precio: ${producto.precio}</span>
      </li>
   );
}
