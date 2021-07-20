import './styles.css';
import ProductImg from 'assets/images/car-card.png';

const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h4>Audi Supra TT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <button className="btn btn-default">
                    <h6>Comprar</h6>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;