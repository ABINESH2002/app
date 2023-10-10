
import React,{useState} from "react";
import "./ProductItems.css";

function ProductItems(props) { 

    return (

        <div className="product-items">
            <div>
                {props.Sno}
            </div>
            <div className="product-item-name">
                {props.name}
            </div>
            <div className="product-item-qty">
                {props.Qty}
            </div>
            <div className="product-item-rate">
                {props.rate}
            </div>
            
        </div>
    );
}

export default ProductItems;