import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter >
        <header>
          <NavBar />
        </header>
        <main>
          <Routes >
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
