import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Api from './pages/Api';
import Error from './pages/Error'
import Formulario from './pages/Formulario';
import Home from './pages/Home'
import Productos from './pages/Productos';
import Otro from './pages/OtroAbout';
// import Navbar from './components/navbar'
import Layout from './components/Layout';
function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/formulario' element={<Formulario/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/otroAbout' element={<Otro/>}/>
          <Route path='*' errorElement={<Error />}/>
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
