import { useState } from "react"
import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import ModalLogin from "../ModalLogin"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'

const BarraNavegacao = () => {
    const [modalCadastro, setModalCadastro] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    const token = sessionStorage.getItem('token')
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null)

    console.log(usuarioLogado);


    const aoEfetuarLogin = () => {
        setModalLogin(false)
        setUsuarioLogado(true)
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {usuarioLogado ?
                <>
                    <li>
                        <Link to='/minha-conta/pedidos'>Minha conta</Link>
                    </li>
                </>
                :
                <>
                    <li>
                        <BotaoNavegacao
                            texto="Login"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setModalLogin(true)}
                        />
                        <ModalLogin
                            aberta={modalLogin}
                            aoFechar={aoEfetuarLogin} />
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Cadastrar-se"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={() => setModalCadastro(true)}
                        />
                        <ModalCadastroUsuario aberta={modalCadastro} aoFechar={() => setModalCadastro(false)} />
                    </li>
                </>
            }
        </ul>
    </nav>)
}

export default BarraNavegacao