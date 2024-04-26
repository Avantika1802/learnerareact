// import React, { useState } from 'react'

// const Cart = ({cart,setCart}) => {
//   const [price, setprice] = useState(0)
//   return (
//     <article>
//       {
//         cart.map((item)=>(
//           <div className='cart_box' key={item.id}>
//             <div className='cart_img'>
//               <img src={item.img}/>
//               <p>{item.title}</p>
//             </div>
//             <div>
//               <button>+</button>
//               <button>-</button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button>remove</button>
//             </div>
//           </div>
//         ))
//       }
//       <div>
//         <span>total price </span>
//         <span>Rs-{price}</span>
//       </div>
//     </article>
//   )
// }

// export default Cart

// import React, { useState, useEffect } from 'react';

// const Cart = ({ cart, setCart }) => {
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     setPrice(total);
//   }, [cart]);

//   return (
//     <article>
//       {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.img} alt={item.title} />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button onClick={() => handleIncrement(item)}>+</button>
//             <button onClick={() => handleDecrement(item)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item)}>remove</button>
//           </div>
//         </div>
//       ))}
//       <div>
//         <span>Total Price: </span>
//         <span>Rs-{price}</span>
//       </div>
//     </article>
//   );
// };



// export default Cart;


import React, { useState, useEffect } from 'react';
import '../styles/cart.css'

const Cart = ({ cart, setCart, handleIncrement, handleDecrement, handleRemove }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    setPrice(total);
  }, [cart]);

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          {/* <div>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleDecrement(item)}>-</button>
          </div> */}
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item)}>remove</button>
          </div>
        </div>
      ))}
      <div>
        <span>Total Price: </span>
        <span>Rs-{price}</span>
      </div>
    </article>
  );
};

export default Cart;
