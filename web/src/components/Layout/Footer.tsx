import { Link } from "react-router-dom"

function Rodape() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/Sobre' >Sobre</Link>
                    </li>
                    <li>
                        <Link to='/ajuda'>Ajuda</Link>
                    </li>
                    <li>
                        <Link to='/redes'>Redes Sociais</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Rodape