import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import MinhaConta from "../paginas/MinhaConta"
import PaginaBase from "../paginas/PaginaBase"
import Pedidos from "../paginas/Pedidos"


const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path="/minha-conta" element={<MinhaConta />}>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="trocas" element={<></>} />
        <Route path="cupons" element={<></>} />
        <Route path="dados" element={<></>} />
      </Route>
    </Routes>
  )
}

export default Rotas