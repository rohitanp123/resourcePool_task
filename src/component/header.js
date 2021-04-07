import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header_Left">
                <div>
            <MenuIcon  />
            </div>
            <h3 className="header_title">E-Commerce</h3>
            </div>
            <div className="header_right">
                <div className="cart_button">
                    <p>Cart Items {props.cartCount && props.cartCount}</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      cartCount: state.cart.cartItemCount
    }
  }
export default connect(mapStateToProps)(Header);