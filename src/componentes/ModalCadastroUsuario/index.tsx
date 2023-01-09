import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import imagemPrincipal from './assets/login.png'
import './ModalCadastroUsuario.css'

const ModalCadastroUsuario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    return (
        <AbModal
            titulo="Cadastrar"
            aberta={true}
            aoFechar={() => console.log('fecha ai')}>
            <div className="corpoModalCadastro">
                <figure>
                    <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
                </figure>
                <form>
                    <AbCampoTexto
                        label="Nome"
                        value={nome}
                        onChange={setNome}
                        placeholder="Seu nome completo"
                    />
                    <AbCampoTexto
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        type='email'
                        placeholder="seuemail@maneiro.com"

                    />
                    <AbCampoTexto
                        label="Endereço"
                        value={endereco}
                        onChange={setEndereco}
                        placeholder="Sua rua e número"
                    />
                    <AbCampoTexto
                        label="Complemento"
                        value={complemento}
                        onChange={setComplemento}
                        placeholder="Apto/casa, bloco, referência"
                    />
                    <AbCampoTexto
                        label="CEP"
                        value={cep}
                        onChange={setCep}
                        placeholder="12345-678"
                    />
                    <AbCampoTexto
                        label="Senha"
                        value={senha}
                        onChange={setSenha}
                        type="password"
                        placeholder="*********"
                    />
                    <AbCampoTexto
                        label="Confirmar Senha"
                        value={confirmarSenha}
                        onChange={setConfirmarSenha}
                        type="password"
                        placeholder="*********"
                    />
                    <footer>
                        <AbBotao texto="Cadastrar" />
                    </footer>
                </form>
            </div>
        </AbModal>
    )
}

export default ModalCadastroUsuario