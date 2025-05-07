


function SingIn() {
    return(
     
    <div>
    <section id="bannerLogin">
        <section id="conteudoBanner">

            <section id="area-header">
                <div id="section-logo-netflix"> <img src={netflixLogo} alt=""/></div>
            </section>
                <div id="area-login">
                    <form action="/cadastro/singIn" method="post">
                        <h1>Entrar</h1>
                    <div class="input">
                        <input type="email" name="Email" id="emial"/>
                    </div>
                    <div class="input">
                        <input type="text" id="senha" name="senha"/>
                        <button class="ver-senha">MOSTRAR</button>
                    </div>
                    <div id="info-senha">A senha deve ter entre 4 e 60 caracteres.</div>

                    <button id="button-login-new" type="submit">Entrar</button>

                    <div id="section-checkbox">
                        <div class="area-checkbox">
                            <input type="checkbox"/>
                            <label for="">Lembre-se de min</label>
                        </div>
                        <p>Precisa de ajuda?</p>
                    </div>
                    </form>
                    <div id="hybrid-login-other">
                        <div id="hybrid-login-novo-user">
                            Novo por aqui?<p> Assine agora.</p>
                        </div>
                        <div id="recaptcha-temos-uso">
                            Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <p>Saiba mais</p>.
                        </div>
                    </div>
                </div>
                <section id="section-footer">
                    <section class="container">
                        <div class="title-footer">Dúvidas? Ligue</div>
            
                        <ul>
                            <li class="iten-list-footer">
                                <span>Perguntas frequentes</span>
                            </li>
                            <li class="iten-list-footer">
                                <span>Central de Ajuda</span>
                            </li>
                            <li class="iten-list-footer">
                                <span>Termos de Uso</span>
                            </li>
                            <li class="iten-list-footer">
                                <span>Privacidade</span>
                            </li>
                            <li class="iten-list-footer">
                                <span>Preferências de cookies</span>
                            </li>
                            <li class="iten-list-footer">
                                <span>Informações corporativas</span>
                            </li>
                        </ul>
                        <select name="" id="idioma">
                            <option value="Portugues">Português</option>
                        </select>
                    </section>
                  </section>
        </section>
    </section>
    </div>

    )
}