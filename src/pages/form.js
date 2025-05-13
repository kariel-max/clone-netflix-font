import netflixLogo from '../image/netflix-logo.png'
import {useState} from "react";
import axios from "axios";

function Form() {
    const [formData, setFormData] = useState({
        senha:"",
        email: "",
    });

    const handleChange = (event)=> {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/cadastro/singUp", formData);
            console.log("Resposta do servidor:", response.data);
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    }

   return( 
    <div >
        <header >
            <section id="area-header">
                <div id="section-logo-netflix"> <img src={netflixLogo} alt='' /></div>
                <div id="section-rigth">
                    <div id="select-idioma">
                        <div class="internet"></div>
                        <select name="" id="idioma">
                            <option value="">Português</option>
                            <option value="">English</option>
                        </select>
                        <div class="seta-para-baixo"></div>
                    </div>
                </div>
                <a href="/cadastro/singIn" ><button class="buttonEntrar" type="submit">Entrar</button></a>
            </section>
        </header>
        <main class="mainContainer">
            <section class="form_Passo">
                <p class="passo">PASSO  DE 3</p>
                <h1>
                Bem-vindo(a) de volta!<br/>
                É fácil assinar a Netflix.
                </h1>
                <p>Informe sua senha para começar a assistir.</p>

                <form class="formPassoInput" onSubmit={handleSubmit}>
                    <label for="email">Email:</label>
                    <input 
                    class="inputPasso" 
                    id="email" 
                    type="email" 
                    name="Email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder='Email'
                    />

                    <label for="senha">Senha:</label>
                    <input 
                    class="inputPasso" 
                    id="senha" 
                    type="password" 
                    name="Senha"
                    onChange={handleChange}
                    value={formData.senha}
                    placeholder='senha'

                    />

                    <p>Esqueceu a senha?</p>
                    <button class="buttonProximoPasso" type="submit">Próximo</button>
                </form>

            </section>
        </main>
            <footer>
            <section class="conteudo" >
                <div id="title-footer">Dúvidas? Ligue</div>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Central de Ajuda</li>
                    <li>Termos de Uso</li>
                    <li>Preferências de cookies</li>
                    <li>Informações corporativas</li>
                    <li>Privacidade</li>
                    
                </ul>
                <div class="select-idioma-footer">
                    <div id="select-idioma">
                        <div class="internet"></div>
                        <select name="" id="idioma">
                            <option value="">Português</option>
                            <option value="">English</option>
                        </select>
                        <div class="seta-para-baixo"></div>
                    </div>
                </div>
                <p>Netflix Brasil</p>
            </section>
        </footer>
    </div>
)
}

export default Form;
