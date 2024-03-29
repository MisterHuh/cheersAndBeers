import React from 'react';
import CartSummaryItem from './cart-summary-item';
import PriceSummary from './priceSummary';

export const CartSummary = props => {
  const imgSrc = './images/general/emptyCart.png';

  let cartQuantity = props.cartQuantity;
  let itemsVerbiage;
  if (cartQuantity === 1) {
    itemsVerbiage = 'item';
  } else {
    itemsVerbiage = 'items';
  }

  if (props.cart.length === 0) {
    return (
      <div
        onClick={() => props.setView('catalog', '')}
        className="text-center px-5"
      >
        <h1 className="border-bottom mt-3 pb-2">Your Cart Is Empty!</h1>
        <div className="emptyCartContainer">
          <img onClick={() => props.setView('catalog', '')} src={imgSrc} alt="emptyCart" className="emptyCartImg" />
        </div>
        <div className="drinkResponsibly mt-3">Please drink responsibly</div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column px-5">
        <h1 className="border-bottom my-3 text-center pb-2">Cart Summary</h1>
        <div className="responsiveWrapper mt-2">

          <div id="cartDetails" className="responsiveDivider d-flex flex-column">
            <h2 className="d-inline border-bottom pb-2">
              Cart <div className="cartQtyText d-inline text-muted ml-1">({cartQuantity} {itemsVerbiage})</div>
            </h2>
            {props.cart.map(item => {
              return (
                <CartSummaryItem
                  setView={props.setView}
                  view={props.view}
                  key={item.product_Id}
                  item={item}
                  deleteCartItems={props.deleteCartItems}
                  updateCartItems={props.updateCartItems}
                  retrieveCart={props.retrieveCart} />
              );
            })}
          </div>
          <div id="pricing" className="responsiveDivider d-flex flex-column">
            <PriceSummary
              setView={props.setView}
              view={props.view}
              cart={props.cart}/>

            <div className="text-center pt-4">
              <div className="m-3">
                <div
                  onClick={() => props.setView('catalog', '')}
                  className="cartSummaryButton test rounded w-50 m-auto px-2 py-1 bg-primary text-white font-weight-bold">Continue Shopping</div>
              </div>
              <div className="mx-3 mt-3 mb-5">
                <div
                  onClick={() => props.setView('checkout', '')}
                  className="cartSummaryButton rounded w-50 m-auto px-2 py-1 bg-success text-white font-weight-bold">Checkout</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

};
