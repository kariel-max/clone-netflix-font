import netflixLogo from '../image/netflix-logo.png'
import tick from '../image/tick.png'
import check from '../image/check.png'


function Autenticar() {
    return(
    <div>
            <header>
            <section id="area-header">
                <div id="section-logo-netflix"> <img src={netflixLogo} alt=""/></div>
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
                <a href="https://move-dev-5ogn3.ondigitalocean.app/cadastro/singIn">
                    <button class="buttonEntrar">Entrar</button>
                </a>
            </section>
        </header>
        <main class="mainContainer">
        <section class="form_Passo2">
        <div class="containerTitle"> 
            <img src={check} alt=""/>
            <p class="passo">PASSO 2 DE 3</p>
            <h1>
            Escolha seu plano.
            </h1>
        </div>
        <div class="containerPasso">
            <div class="areatickTextImg">

                <img src={tick} alt=""/>
                <p class="tickTextImg"> Sem compromisso, cancele quando quiser.</p>

            </div>

            <div class="areatickTextImg">

                <img src={tick} alt=""/> 
                <p class="tickTextImg">Entretenimento sem fim, por um preço baixo.</p>

            </div>

            <div class="areatickTextImg">

                <img src={tick} alt=""/>
                <p class="tickTextImg"> Divirta-se com a Netflix em todos os seus aparelhos.</p>

            </div>
            
        </div>
        <a href="https://move-dev-5ogn3.ondigitalocean.app/cadastro/planform"><button class="buttonProximoPasso">Próximo</button></a>
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
);
}

export default Autenticar;