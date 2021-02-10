import './App.css';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="App">
          <HeaderContainer />
          <NavBar />
          <Content />
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}


export default App;
