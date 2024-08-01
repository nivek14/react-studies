import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products" + id;

    const { data: product, loading, error } = useFetch(url);

    return (
        <>
            <p>{id}</p>
            {error && <p>teve erro</p>}
            {loading && <p>carregando</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}

export default Product