import { Route,Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path={routes.contact} element={<Contact />}/>
            <Route path={routes.detail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
            <Route path='*' element={<h3>Page Not Found</h3>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
