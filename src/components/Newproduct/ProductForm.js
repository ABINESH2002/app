import React, {useState} from 'react';
import './ProductForm.css';

const ProductForm = (props) => {

    const [enteredSno, setEnteredSno] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredQty, setEnteredQty] = useState('');
    const [enteredRate, setEnteredRate] = useState('');
    
    

    const SnoChangeHandler = (event) => {
        setEnteredSno(event.target.value)
        
    } 
    const NameChangeHandler = (event) => {
        
        setEnteredName(event.target.value)
    } 
    const QtyChangeHandler = (event) => {
        
        setEnteredQty(event.target.value)
    } 
    const RateChangeHandler = (event) => {
        
        setEnteredRate(event.target.value)
    } 
   
   
    const submitHandler = (event) => {
        event.preventDefault()
        
        

        const productData = {
            Sno : enteredSno,
            name : enteredName,
            Qty : enteredQty,
            rate : enteredRate
        }
        props.onSaveProductData(productData)
        
        setEnteredSno('')
        setEnteredName('')
        setEnteredQty('')
        setEnteredRate('')
        

    }

    return(
        
            <form onSubmit={submitHandler}>
            <div className="new-product-control">
                <div className='new-product-comp'>
                    <label >S.No</label>
                <input type='text' onChange={SnoChangeHandler} value={enteredSno} />
                </div>

                <div  className='new-product-comp'>
                    <label>Product Name</label>
                <input type='text' onChange={NameChangeHandler} value={enteredName}/>
                </div>

                <div  className='new-product-comp'>
                    <label>Quantity</label>
                <input type='number' onChange={QtyChangeHandler} value={enteredQty}/>
                </div>

                <div  className='new-product-comp'>
                    <label>Rate</label>
                <input type='number' onChange={RateChangeHandler} value={enteredRate}/>
                </div>

            </div>
            <div className="new-product-action">
                <button type='submit'>Add new</button>
            </div>
            </form>
        
    );
}

export default ProductForm;