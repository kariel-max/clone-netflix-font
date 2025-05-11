import '../index.css';
import netflixLogo from '../image/netflix-logo.png'
import rigthArrow from '../image/right-arrow.png'
import sacoPipoca from '../image/saco-de-pipoca.png'
import sinalAdicionar from '../image/sinal-adicionar.png'
import sinalDeMias from '../image/sinal-de-mais.png'

function Home() {
    return(
        <div>
            <header>
                <section id="bannerLogin">
                    <section id="conteudoBanner">
                        <section id="area-header">
                            <div id="section-logo-netflix"> <img src={netflixLogo} alt='' /></div>
                            <div id="section-rigth">
                                <div id="select-idioma">
                                    <div className="internet"></div>
                                    <select name="" id="idioma">
                                        <option value="">Português</option>
                                        <option value="">English</option>
                                    </select>
                                    <div className="seta-para-baixo"></div>
                                </div>

                                <a href="/cadastro/singIn"><button className="buttonEntrar" type="submit">Entrar</button></a>
                            </div>
                        </section>


                        <section className="banner">3
                            <div id="area-login-inicial">
                                <h1>Filmes, séries e muito mais, sem limites</h1>
                                <p>Assista onde quiser. Cancele quando quiser.</p>
                                <div id="login-inicial">
                                    <h3>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                                
                                    <div id="input-inicial">
                                        <a href="/cadastro">
                                            <button type="submit" id="LoaderDiv" >
                                                Vamos lá 
                                                <img src={rigthArrow} alt='' />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </header>
            <main>
                <section className="container">
                    <section id="area-anuncio">
                        <div id="anuncio">
                            <img src={sacoPipoca} alt=''  className="img-saco-pipoca"/>
                            <div id="area-text-anuncio">
                                <p className="text-maior">A Netflix que você adora por apenas R$18,90.</p>
                                <p className="text-menor">Assine o plano Padrão com anúncios.</p>
                                <button>Saiba mais <img src={sinalAdicionar} alt='' /></button>
                            </div>
                        </div>
                    </section>

                    <section className="conteudo">
                        <div id="aproveiteTv">
                            <div className="area-texto-tv">
                                <h2>Aproveite na TV</h2>
                                <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros
                                    dispositivos.</p>
                            </div>
                            <div className="video primeiro">
                                <img alt=""
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>

                                <video id="primeiro-video" data-uia="nmhp-card-animation-asset-video" autoPlay="" playsInline=""
                                    muted="" loop="">
                                    <source
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                        type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="container">
                    <section className="conteudo">
                        <div id="aproveiteTv">
                            <div className="video">
                                <img alt=""
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
                                <video data-uia="nmhp-card-animation-asset-video" autoPlay="" playsInline="" muted="" loop="">
                                    <source
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                                        type="video/mp4"/>
                                </video>
                            </div>
                            <div className="area-texto-tv">
                                <h2> Assista onde quiser</h2>
                                <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="container">
                    <section className="conteudo">
                        <div id="aproveiteTv">
                            <div className="area-texto-tv">
                                <h2>Crie perfis para crianças</h2>
                                <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para
                                    elas, sem pagar a mais por isso.</p>
                            </div>
                            <img alt=""
                                src="https://occ-0-4464-3852.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190"/>
                        </div>
                    </section>
                </section>
                <section className="container">
                    <section className="conteudo">
                        <div id="aproveiteTv">
                            <div id="img-assistir-offline">
                                <img alt=""
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
                                <div id="texto-cima-img">
                                    <img alt=""
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
                                    <div id="area-text-cima-img">
                                        <div className="area-text-title">Stranger Things</div>
                                        <div className="area-text-download">Download em andamento...</div>
                                    </div>
                                    <div className="icone-download"> </div>
                                </div>
                            </div>
                            <div className="area-texto-tv">
                                <h2>Baixe séries para assistir offline</h2>
                                <p>Disponíveis somente em planos sem anúncios.</p>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="container">
                    <section className="conteudo">
                        <div id="Perguntas">
                            <h2>Perguntas frequentes</h2>
                            <ul>
                                <li>
                                    <div className="button-pergunta">
                                        O que é a Netflix? <img src={sinalAdicionar} alt='' />
                                    </div>
                                    <div className="resposta">
                                        <p>A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes
                                            e documentários premiados em milhares de aparelhos conectados à internet.

                                            Você pode assistir a quantos filmes e séries quiser, quando e onde quiser - tudo por
                                            um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana,
                                            adicionamos novas séries e filmes.</p>

                                    </div>
                                </li>
                                <li>
                                    <div className="button-pergunta">Quanto custa a Netflix? <img src={sinalDeMias} alt='' />
                                    </div>
                                    <div className="resposta">
                                        <p>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming
                                            por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem
                                            contrato nem taxas extras.</p>
                                    </div>
                                </li>
                                <li>
                                        <div className="button-pergunta">Onde posso assistir? <img src={sinalAdicionar} alt='' />

                                    </div>
                                    <div className="resposta">
                                        <p>Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com
                                            para começar a assistir no computador ou em qualquer aparelho conectado à Internet
                                            compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos
                                            de streaming e videogames.
                                        </p> <br/>
                                        <p>
                                            Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS,
                                            Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem
                                            precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="button-pergunta">Como faço para cancelar? <img src={sinalAdicionar} alt='' />
                                    </div>
                                    <div className="resposta">
                                        <p>A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua
                                            conta na internet com apenas dois cliques. Não há taxa de cancelamento - você pode
                                            começar ou encerrar a sua assinatura a qualquer momento.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="button-pergunta"> O que eu posso assistir na Netflix? <img
                                            src={sinalAdicionar} alt='' />
                                    </div>
                                    <div className="resposta">
                                        <p>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix
                                            premiados e muito mais. Assista o quanto quiser, quando quiser.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="button-pergunta">A Netflix é adequada para crianças? <img
                                            src={sinalAdicionar} alt='' />
                                    </div>
                                    <div className="resposta">
                                        <p>A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se
                                            divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos
                                            responsáveis.
                                        </p> <br/>
                                        <p>
                                            O recurso de controle parental, incluso nos perfis para crianças e protegido por
                                            PIN, permite restringir a classNameificação etária do conteúdo que as crianças podem ver
                                            e bloquear títulos específicos que você não quer que elas assistam.</p>
                                    </div>
                                </li>
                            </ul>

                            <div id="login-inicial">
                                <h3>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
                                <form action="#" method="post">
                                    <div id="input-inicial">
                                        <input type="email" id="inputDaPaginaInicial" placeholder="Email"/>
                                        <button type="submit">Vamos lá <img src={rigthArrow} alt='' /></button>

                                    </div>
                                </form>


                            </div>
                        </div>

                    </section>
                </section>
            </main>
            <footer>
        
        <section className="conteudo">
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
            <div className="select-idioma-footer">
                <div id="select-idioma">
                    <div className="internet"></div>
                    <select name="" id="idioma">
                        <option value="">Português</option>
                        <option value="">English</option>
                    </select>
                    <div className="seta-para-baixo"></div>
                </div>
            </div>
            <p>Netflix Brasil</p>
        </section>
            </footer>
        </div>
    );
}

export default Home;