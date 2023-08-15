import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}> 
        <div className="redes">
            <a href="'https://www.aluracursos.com">
                <img src="/img/facebook.png"/>
            </a>
            <a href="'https://www.aluracursos.com">
                <img src="/img/twitter.png"/>
            </a>
            <a href="'https://www.aluracursos.com">
                <img src="/img/instagram.png"/>
            </a>
        </div>
        <img src="/img/Logo (1).png"/>
        <strong>Desarrollado por Rayg28</strong>

    </footer>
}


export default Footer