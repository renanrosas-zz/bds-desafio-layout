import './styles.css';

const SearchBar = () => {

    return (
        <div className="btn-container">
            <div className="search-container">
                <input type="text" placeholder="Digite sua busca" />
            </div>
            <button className="btn btn-default btn-icon">
                <h6>Buscar</h6>
            </button>
        </div>
    );
}

export default SearchBar;