import netflixLogo from "../image/netflix-logo.png"

function Main() {
     return(
    <div>
        <header>
            <section id="bannerLogin">
                <section id="conteudoBanner">
                    <section id="area-header">
                <div id="section-logo-netflix"> <img src={netflixLogo} alt="" /></div>
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
                <a href="/cadastro/singIn"><button class="buttonEntrar">Entrar</button></a>
            </section>

                </section>
            </section>
        </header>
        <main>
           <iframe  id="primeiro-video" src="https://telaflixapi.com/e/movie?tmdb=1220515" frameborder="0"></iframe>
        </main>
        <footer>  
            <section class="conteudo">
                <div id="title-footer">Dúvidas? Ligue</div>
                <ul>
                    <li>Perguntas frequentes</li>
                    <li>Central de Ajuda</li>
                    <li>Conta</li>
                    <li>Media Center</li>
                    <li>Relações com investidores</li>
                    <li>Carreiras</li>
                    <li>Resgatar cartão pré-pago</li>
                    <li>Comprar cartão pré-pago</li>
                    <li>Formas de assistir</li>
                    <li>Termos de Uso</li>
                    <li>Privacidade</li>
                    <li>Preferências de cookies</li>
                    <li>Informações corporativas</li>
                    <li>Entre em contato</li>
                    <li>Teste de velocidade</li>
                    <li>Avisos legais</li>
                    <li>Só na Netflix</li>
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

export default Main;