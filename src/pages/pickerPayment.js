


function PaymentPick() {
    return(
        <div>
            <header>
            <section id="area-header">
            <div id="section-logo-netflix"> <img src="/public/image/netflix-logo.png" alt="" /></div>
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
            <a href=""><button class="buttonEntrar" type="submit">Entrar</button></a>
            </section>
            </header>
            <main class="mainContainer">
            <section id="sectionPayment">
                <div class="payTitle">
                    <img src="/public/image/lock.png" alt=""/>
                    <p>PASSO 4 DE 4</p>
                    <h1>Escolha como você quer pagar</h1>
                    <p>Sua forma de pagamento está criptografada e você pode mudá-la quando quiser.</p>

                    <span>Segurança e traquilidade. <br/>Cancele online com facilidade.</span>
                </div>
                <div class="areaPayment">
                    <div class="paymentCrip">
                        criptografia de ponta a ponta <img src="/public/image/locked.png" alt=""/>
                    </div>

                    <div class="cardPayment">
                        <div>
                            <p>Cartão de crédito ou débito</p>
                            <img src="" alt=""/>
                        </div>
                        <img src="/public/image/right-arrow.png" alt=""/>
                    </div>

                    <div class="codPayment">
                        <div>
                            Código do cartão pré-pago
                        </div>
                        <img src="/public/image/right-arrow.png" alt=""/>
                    </div>
                </div>

            </section>
            </main>
            <footer>
            <section class="conteudo" >
            <div id="title-footer">Dúvidas? Ligue </div>
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