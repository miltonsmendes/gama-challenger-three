import './styles.scss';


export function SocialsSection() {

    return (
        <div className="socials-section-container">
            <div>
                <h1>Redes Sociais</h1>
            </div>

            <div className="icon-container">
                <div>
                    <div>
                        <a href="https://www.instagram.com/larespiritadaterceiraidade/" target="_blank"><i class="fab fa-instagram fa-4x"></i></a>
                    </div>
                    <div>
                        <p>Instagram <br />
                            para sorteios</p>
                    </div>
                </div>

                <div>
                    <div>
                    <a href="https://www.instagram.com/larespiritadaterceiraidade/" target="_blank"><i class="fab fa-whatsapp fa-4x"></i></a>
                    </div>
                    <div>
                        <p>Mensagem no <br />
                            Whatsapps</p>
                    </div>
                </div>

                <div>
                    <div>
                    <a href="https://www.instagram.com/larespiritadaterceiraidade/" target="_blank"><i class="fab fa-facebook fa-4x"></i></a>
                    </div>
                    <div>
                        <p>Facebook para <br />
                            Novidades</p>
                    </div>
                </div>

            </div>

            <div className="divisor"/>

        </div>
    );

}