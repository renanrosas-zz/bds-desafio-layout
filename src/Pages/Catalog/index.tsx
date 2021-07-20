import ProductCard from "Components/ProductCard";
import SearchBar from "Components/SearchBar";


const Catalog = () => {

    return (
        <div className="container my-4">
            <SearchBar />
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                <div className="col-sm-6 col-lg-4">
                    <ProductCard />
                </div>
                
            </div>
        </div>
    );
}

export default Catalog;