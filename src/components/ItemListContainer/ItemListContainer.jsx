import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import Cards from '../Cards/Cards.jsx';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoria } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch('../../data.json');
          console.log(response);
          const data = await response.json();

          const productosFiltrados = categoria
            ? data.filter(producto => producto.categoria === categoria)
            : data;

          setProductos(productosFiltrados);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        console.error('Error data:', error);
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchData();
  }, [categoria]);
  if (isLoading) {

    return <p className='loaded'>Cargando...</p>;
  }

  return (
    <main>
      <h1 className='titulo__tienda'>TIENDA</h1>
      <p className="text-xl text-center text-black m-2 fixed-element">
        {greeting}
      </p>
      <section className='tienda'>
        {productos.map(producto => {

          return (
            <article className='cards' key={producto.id}>
              <Link to={`/item/${producto.id}`}>
                <Cards src={producto.thumbnail} title={producto.nombre} price={producto.precio} />
              </Link>
              <div className="buttons-container">
                <Link to={`/item/${producto.id}`}>
                  <button className="ver-button">VER DETALLES</button>
                </Link>
                <button className="agregar-button">AGREGAR AL CARRITO</button>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default ItemListContainer;
