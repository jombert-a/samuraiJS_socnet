import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
