

import './App.css';
import Content from './Component/Homepage/Content';
import Header from './Component/Homepage/Header';
import Product from './Component/Homepage/Product';
import Footer from './Component/Homepage/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
