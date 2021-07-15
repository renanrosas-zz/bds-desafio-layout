import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div className="home-image-container">
                    <MainImage />
                    </div>
                    <div>
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>
                </div>
            </div>
            <div className="small-card">
                <button className="btn btn-default">
                <Link to="/produtos">
                    <h4>Ver catálogo</h4>
                </Link>
                </button>
                <p>Comece agora a navegar</p>
            </div>
        </div>
    );
}

export default Home;