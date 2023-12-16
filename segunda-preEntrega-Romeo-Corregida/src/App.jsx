import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Components/CartWidget/CartWidget';
import Footer from './Components/Footer';


function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

    <Routes>

      <Route path={'/'} element={ <ItemListContainer/> } />
      <Route path={'/categoria/:id'} element={ <ItemListContainer/> } />
      <Route path={'/item/:id'} element={ <ItemDetailContainer/> } />
      <Route path={'/cart'} element={ <CartWidget/> } />
      <Route path={'*'} element={ <Error />} />

      

    </Routes>

    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App
