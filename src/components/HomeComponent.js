import React from "react";

function HomeComponent(props) {
  // console.log("Home component: \n",props.data);
  console.log("Home component remove",props)
  return (
    <div className="App">
      {/* HeaderComp.js */}

      {/* <div className="add-to-cart">
          <span className="cart-counter">{props.data.length}</span>
          <img src="https://i.pinimg.com/564x/15/4f/df/154fdf2f2759676a96e9aed653082276.jpg" />
        </div> */}
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png" />
        </div>

        <div className="text-wrapper item">
          <span>Android</span>
          <br />
          <span>18000-RS</span>
        </div>

        <div className="btn-wrapper item ">
          <button className="btn-add"
            onClick={() => {
              props.addToCartHandler({ name: "Android", price: 18000 });
            }}
          >
            Add to Cart
          </button>
          <button className="btn-remove"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
