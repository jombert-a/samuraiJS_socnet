import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="App">
          <Header />
          <NavBar />
          <Content store={props.store} />
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}


export default App;
