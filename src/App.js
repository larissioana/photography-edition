import { GlobalStyle} from "./GlobalStyles";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import PhotographyPage from "./pages/PhotographyPage";
import PhotographyDetail from "./components/PhotographyDetail";
import EditorialPage from "./pages/EditorialPage";
import ConnectSection from "./pages/ConnectUsSection";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import {Routes,Route,useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


function App() {
  const location=useLocation();
  return (
    <div className="App">
    <GlobalStyle/>
    <AnimatePresence mode='wait'>
    <Nav/>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/portfolio' element={<PhotographyPage/>}></Route>
    <Route path="/portfolio/:id" element={<PhotographyDetail/>}></Route>
    <Route path='/editorial-photography' element={<EditorialPage/>}></Route>
    <Route path='connect-with-us' element={<ConnectSection/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    </Routes>
    </AnimatePresence>
    <Footer/>
    </div>
  );
}

export default App;
