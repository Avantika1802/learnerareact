// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import './styles/amazon.css';

// const App = (size) => {
//   const[show ,setShow] =useState(true);
//   const [cart, setCart] = useState([]);
//   const [warning, setwarning] = useState(false)
//   const handleClick = (item)=>{
//     let isPresent =false;
//     cart.forEach((product)=>{
//       if(item.id === product.id)
//       isPresent = true;
//     })
//     if(isPresent){
//       setwarning(true);
//       setTimeout(()=>{
//         setwarning(false);
//       },2000);
//       return;
//     }
//     setCart([...cart,item]);
//   }

  
//   return (
//     <React.Fragment>
//       <Navbar size={cart.length}/>
//       <Amazon handleClick={handleClick}/>
//       <Cart cart={cart} setCart={setCart}/>
//       {
//         // when the warning is true only them div will be displayed
//         warning && <div className='warning'>Item is already added to your cart</div>
//       }
//     </React.Fragment>
//   )
// }

// export default App

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  // Define the functions to update the cart
  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === item.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemove = (item) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} />
      <Amazon handleClick={handleClick} />
      <Cart
        cart={cart}
        setCart={setCart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleRemove={handleRemove}
      />
      {warning && <div className="warning">Item is already in your cart</div>}
    </React.Fragment>
  );
};

export default App;
