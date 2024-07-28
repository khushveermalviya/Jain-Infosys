
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaptopList from './Components/LaptopList.jsx';
import LaptopDetail from './Components/LaptopDetail.jsx';
import Nav from './Components/Nav.jsx';
import Carousels from './Components/Carousels.jsx';
import Footer from './Components/Footer.jsx';
import Gadgets from './Components/Gadgets.jsx';
import Storage from './Components/Storage.jsx';
function App() {
  return (
    <Router>
      <Nav/>
      <Carousels/>
      <Routes>
        <Route path="/" element={<LaptopList />} />
        <Route path="/laptop/:id" element={<LaptopDetail />} />
      </Routes>
      <Gadgets/>
      <Storage/>
      <Footer/>
    </Router>
  );
}

export default App;
