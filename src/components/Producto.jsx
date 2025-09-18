export default function Producto({ producto }) {
   return (
      <li>
         <p>Articulo: {producto.nombre}</p>
         <p>Cantidad: {producto.cantidad}</p>
         <p>Precio: ${producto.precio}</p>
      </li>
   );
}
