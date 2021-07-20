import Navbar from "Components/Navbar";
import Catalog from "Pages/Catalog";
import Home from "Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/produtos">
                <Catalog />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;