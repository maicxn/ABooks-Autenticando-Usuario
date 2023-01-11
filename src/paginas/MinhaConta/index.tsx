import { Link, Outlet } from "react-router-dom"
import Newsletter from "../../componentes/Newsletter"

import './MinhaConta.css'

const MinhaConta = () => {
    return (
        <>
            <h1 className="MinhaConta__titulo">Minha conta</h1>
            <section className="MinhaConta">
                <div className="menu">
                    <ul className="navegacao">
                        <li>
                            <Link to="/minha-conta/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/trocas">Trocas</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/cupons">Cupons</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/dados">Seus dados</Link>
                        </li>
                    </ul>
                </div>
                <div className="conteudo">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default MinhaConta