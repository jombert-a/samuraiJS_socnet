import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'


const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Content data={props.data} dispatch={props.dispatch} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
