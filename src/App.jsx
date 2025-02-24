// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layouts/DefaultLayout.jsx';
// import degli elementi della libreria gestione delle rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from "./pages/HomePage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import ListaDeiPost from "./pages/ListaDeiPost.jsx";



export default function App() {
  

  return (
    <>

      <BrowserRouter>
          <Routes>
              <Route element={<DefaultLayout />} >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/chi" element={<ChiSiamo />} />
                  <Route path="/post" element={<ListaDeiPost />} />
              </Route>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

 
