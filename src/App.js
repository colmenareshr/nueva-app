import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';

const NavItems = {
  home: 'Home',
  SobreMim: 'Sobre Mim',
  Portfolio: 'Portfolio',
  Contato: 'Contato'
}

function App() {
  return (
    <div>
        <div>
        <Header />

        </div>

        <div>
        <List />

        </div>
      

    </div>
  );
}

export default App;
