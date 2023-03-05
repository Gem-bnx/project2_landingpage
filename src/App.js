import './App.css';
import Banner from './pages/Banner';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Process from './pages/Process';
import Stages from './components/Stages';
import Service from './pages/Service';
import Product from './pages/Product';
import Company from './pages/Company';
import User from './pages/User';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header Navbar={Navbar}></Header>
      <Banner></Banner>
      <Process Stages={Stages}></Process>
      <Service></Service>
      <Product></Product>
      <Company></Company>
      <User></User>
      <Footer></Footer>
    </div>
  );
}

export default App;
