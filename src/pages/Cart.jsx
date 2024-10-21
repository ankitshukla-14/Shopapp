import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price,0));
  },[cart])
  return (
    <div className="py-3 px-3"> 
      {
        cart.length > 0 ? (
          <div className="flex justify-between max-w-6xl mx-auto">
            <div>
              {
                cart.map( (item) => (
                  <CartItem item={item}/>
                ))
              }
            </div>
            <div className="flex flex-col mr-8 mt-6 relative top-10 right-10">
              <div className="text-green-800 font-bold text-[20px] uppercase ">Your Cart</div>
              <div className="text-green-800 font-bold text-[50px] ">Summary</div>
              <div>Total Items: {cart.length}</div>
              <div>
                <p>Total amount: ${totalAmount}</p>
                <button>Checkout Now</button>
              </div>
            </div>
          </div>
        ) :
        (
          <div className="flex justify-center items-center h-[100] ">
            <h1>Cart Empty</h1>
            <br/>
            <Link to="/">
              <button>Shop Now</button>
            </Link>
          </div>
        )
      
      }
    </div>
  )
}

export default Cart;