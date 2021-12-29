import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscar from "./pages/buscar";
import CriarGrupo from "./pages/criar-grupo";
import CriarPropaganda from "./pages/criar-propaganda";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Perfil from "./pages/perfil";
import Configurações from "./pages/configuracoes";
import CriarMensagem from "./pages/criar-mensagem";
import Grupo from "./pages/grupo";
import Mensagem from "./pages/mensagem";
import Seguindo from "./pages/seguindo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/criar-grupo" element={<CriarGrupo />} />
        <Route path="/criar-propaganda" element={<CriarPropaganda />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracoes" element={<Configurações />} />
        <Route path="/criar-mensagem" element={<CriarMensagem />} />
        <Route path="/grupo" element={<Grupo />} />
        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/seguindo" element={<Seguindo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;