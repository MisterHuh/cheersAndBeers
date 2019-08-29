import React from 'react';

function Header(props) {

  const imgUrl = 'funny_logo.png';
  const size = {
    width: '277px',
    height: '277px'
  };

  return (
    <div>
      <img className="img-fluid w-25 align-middle mx-5 " src={imgUrl} alt="logo" style={size}/>
      <div className="d-inline display-1 align-middle ">Wicked Sales</div>

      <div className="d-inline  float-right mt-3">
        <i className="fas fa-shopping-cart" onClick={() => { props.setView('cart', {}); }}></i>
        <span className="mx-2"></span>
        <div className=" w-25 d-inline font-italic h5 mr-2">Items: {props.cartItemCount} </div>
      </div>

    </div>
  );
}

export default Header;
