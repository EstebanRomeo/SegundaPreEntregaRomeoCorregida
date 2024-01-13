import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './Components/Error';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Components/CartWidget/CartWidget';
import Footer from './Components/Footer';
import Especiales from '../src/Components/Especiales'
import Normales from './Components/Normales';
import Vegetales from './Components/Vegetales'


function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

    <Routes>

      <Route path={'/'} element={ <ItemListContainer/> } />
      <Route path={'/categoria/:id'} element={ <ItemListContainer/> } />
      <Route path='/categoria/:categoria' element={<ItemListContainer />} />
      <Route path={'/item/:id'} element={ <ItemDetailContainer/> } />
      <Route path='/especiales' element={<Especiales/>} />
      <Route path='/normales' element={<Normales/>} />
      <Route path='/vegetales' element={<Vegetales/>} />
      <Route path={'/cart'} element={ <CartWidget/> } />
      <Route path={'*'} element={ <Error />} />

      

    </Routes>

    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App
