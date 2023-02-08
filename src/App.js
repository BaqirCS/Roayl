import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';
import TaxForm from './component/TaxForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './component/Example';
import PrintTax from './component/PrintTax';
import Contract from './component/Contract';
import Nav from './component/Nav';
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Contract />} />
          <Route path="/printScreen" element={<Example />} />
          <Route path="/tax" element={<TaxForm />} />
          <Route path="/printTax" element={<PrintTax />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
