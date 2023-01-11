import axios from "axios"
import { AbBotao, AbCampoTexto, AbModal, } from "ds-alurabooks"
import { useState } from "react"
import imagemPrincipal from './assets/login.png'
import './ModalLogin.css'


interface modalLoginProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalLogin = ({ aberta, aoFechar }: modalLoginProps) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        axios.post('http://localhost:8000/public/login', usuario)
        .then(resposta => {
            sessionStorage.setItem('token', resposta.data.access_token)
            setEmail('')
            setSenha('')
            aoFechar()
        }) 
        .catch(erro => {
            if(erro) {
                alert(erro?.response?.data?.message)
            } else {
                alert('Aconteceu algum erro inesperado ao efetuar o seu Login. Entre em contato com o suporte da ABooks.')
            }    
        })
    }

    return (
        <AbModal
            aberta={aberta}
            aoFechar={aoFechar}
            titulo="Login">
            <div className="corpoModalLogin">
                <figure>
                    <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
                </figure>
                <form onSubmit={aoSubmeterFormulario}>
                    <AbCampoTexto
                        label="E-mail"
                        placeholder="seuemail@maneiro.com"
                        value={email}
                        onChange={setEmail}
                        type='email' />
                    <AbCampoTexto
                        label="Senha"
                        placeholder="***********"
                        value={senha}
                        onChange={setSenha}
                        type='password'
                    />
                    <div className="anchor">
                        <a href="/">Esqueci minha senha</a>
                    </div>
                    <footer>
                        <AbBotao texto="Fazer Login" />
                    </footer>
                    <hr color="#002F52" />

                    <div className="criarConta">
                        <h3>Ainda não tem uma conta?</h3>
                        <AbBotao texto="Criar Conta" />

                    </div>
                </form>

            </div>
        </AbModal>
    )
}
export default ModalLogin