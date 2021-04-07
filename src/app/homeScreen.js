import React from 'react';
import { connect } from "react-redux";
import { products } from "../data";
import { addToCart } from "../redux/action/addtoCart";

const HomeScreen = (props) => {
const {selectedSize} = props;
const handleAddToCart= () => {
  props.addToCart(props.cartCount + 1)
}
  return (
    <div className="home_container">
        {products.map((item,index) => {
          if(item.size == selectedSize){
            return(
              <div className="product_item" key={index}>
                <img className="productImage" src={item.image} alt="image" />
                <div className="productDetail_box">
                  <p>{item.name}</p>
                  <div className="productDetail_bottomBox">
                    <p>Size: {item.size}</p>
                    <button 
                    className="addToCart_button" 
                    type="button"
                    onClick={handleAddToCart}
                    >Add to cart</button>
                  </div>
                </div>
              </div>
            )
          }
          
        })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return{
    cartCount: state.cart.cartItemCount
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: data => dispatch(addToCart(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);