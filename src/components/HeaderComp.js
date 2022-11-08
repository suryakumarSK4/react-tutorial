import React from 'react';

function HeaderComp(props) {
    console.log("Header-Component: ",props.data);
  return (
    <div >
        <div className="add-to-cart">
            <span className="cart-counter">{props.data.length}</span>
            <img src="https://i.pinimg.com/564x/15/4f/df/154fdf2f2759676a96e9aed653082276.jpg" />
        </div>
    </div>);
}

export default HeaderComp;
