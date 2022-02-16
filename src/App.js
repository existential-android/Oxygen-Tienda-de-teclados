import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/*<ItemListContainer />*/}
        <ItemDetailContainer />
      </main>
    </>
  );
}

export default App;
