import './App.css'
//import './styles/index.scss'
import Navbar from './components/Navbar/Navbar'
import FaCartPlus from './components/Cart/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    < Navbar />
    < FaCartPlus />
    < ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />

    </>
  )
}

export default App
