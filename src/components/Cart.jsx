import React from 'react'
import { useSelector } from 'react-redux'
import ItemsList from './ItemsList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearCart());
    }

  return ( 
    <div className='w-4/12 mx-auto my-5'>
        <h1 className='font-bold text-2xl my-4 text-center'>CART</h1>
        <div>
            {cartItems.map(item => <ItemsList item={item} key={item?.card?.info?.id} />)}
        </div>
        {!cartItems.length ? <h3 className='font-bold text-2xl text-center my-10'>Your cart is empty...</h3> : <button onClick={handleClearCart} className='border border-red-700 bg-red-500 text-white px-4 py-2 rounded-lg text-lg'>Clear Cart</button>}
    </div>
  )
}

export default Cart