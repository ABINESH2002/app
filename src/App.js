import './App.css';
import React,{useState} from 'react';
import Products from './components/Products';
import Newproduct from './components/Newproduct/NewProduct';

const DUMMY_PRODUCTS = [];


function App() {
  
  const [products, setProducts] = useState(DUMMY_PRODUCTS);


  function addProductHandler(newProductData){
    setProducts((prevProducts) => {
      return [...prevProducts,newProductData,]
    })
  }
  return (
    <div>
      <h1>
        Items
      </h1>
      <Newproduct onAddProduct={addProductHandler}/>
      <Products product={products} />
    
      
      

    </div>
    
  );
}

export default App;
