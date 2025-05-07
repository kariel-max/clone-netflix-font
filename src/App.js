import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Form from "./pages/form";
import Autenticar from "./pages/autenticar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/cadastro/form" element={<Form/>}/>
        <Route path="/cadastro/autenticar" element={<Autenticar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
