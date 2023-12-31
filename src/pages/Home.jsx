import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Loader } from "../components/Loader/Loader";
import { productsMuebles } from "../lib/products.requests";
import {useState, useEffect } from "react";

export const Home = () => {
    const [ products, setProducts ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        productsMuebles()
        .then(res => {
            setIsLoading(false);
            setProducts(res)}
        )
}, []);

if (isLoading) return < Loader/>

return(
    <div>
        { isLoading && < Loader/> }
        <p className="homeTitle">LO NUEVO EN ¡A TODO MADERA!</p>
        <div>
            <ItemListContainer products={products}/>
        </div>
    </div>
    );
};
