import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter >
          <header>
            <NavBar />
          </header>
          <main>
            <Routes >
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
