import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os Dados");
    };

    return (
        <div className="container"> {/* Corrigido de "Conteiner" para "container" */}
            <h1>Acesse o Sistema</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" /> {/* Corrigido de "imput" para "input" */}
                        Lembrar usuário
                    </label>
                    <a href="#"> Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Criar Conta <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
