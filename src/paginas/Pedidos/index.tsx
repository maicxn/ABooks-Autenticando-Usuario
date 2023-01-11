import { AbBotao } from "ds-alurabooks"
import './pedidos.css'

const Pedidos = () => {
    return(
        <section className="pedidos">
            <h1>Pedidos</h1>
            <div className="dados">
                <ul>
                    <li>Pedido: <strong>123456</strong></li>
                    <li>Data do pedido: <strong>11/01/2023</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em: <strong>15/01/2023</strong></li>
                </ul>
                <AbBotao texto="Detalhes" />
            </div>
        </section>
    )
}

export default Pedidos