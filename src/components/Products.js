import ProductItems from "./ProductItem";
import './products.css';
function Products(prope) {
    return(
        <div className="products">
            {
                prope.product.map((product) => (
                    <ProductItems 
                        Sno = {product.Sno}
                        name = {product.name}
                        Qty = {product.Qty}
                        rate = {product.rate}
                    />
                ))
            }
        </div>
    );
}

export default Products;