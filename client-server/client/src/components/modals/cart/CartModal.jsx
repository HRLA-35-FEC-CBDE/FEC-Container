// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import CartItems from './CartItems';

// Redux
import { hideCart, getCart, scrollCart } from '../../../redux/actions.js';

const mapStateToProps = (state) => ({
  cartQuantity: state.cart.cartQuantity,
  data: state.cart.data
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (query) => dispatch(getCart(query)),
  hideCart: () => dispatch(hideCart()),
  scrollCart: (scrollAmount) => dispatch(scrollCart(scrollAmount))
});

class CartModal extends Component {
  componentDidMount = () => {
    document.getElementById('slider').scrollLeft += this.props.xCoords;
  };

  leftScroll = () => {
    if (this.props.xCoords >= 500) {
      document.getElementById('slider').scrollLeft -= 500;
      let coords = this.props.xCoords - 500 < 0 ? 0 : this.props.xCoords - 500;
      this.props.scrollCart(coords);
    }
  };

  rightScroll = () => {
    if (this.props.xCoords < (this.props.cartQuantity - 1) * 500) {
      document.getElementById('slider').scrollLeft += 500;
      let coords =
        this.props.xCoords + 500 < 500 * (this.props.cartQuantity - 1)
          ? this.props.xCoords + 500
          : 500 * (this.props.cartQuantity - 1);
      this.props.scrollCart(coords);
    }
  };

  render() {
    return (
      <div className="cartContainer">
        <div className="cartWrapper">
          <div className="cartWindow">
            <div className="cartContents" onMouseLeave={this.props.hideCart}>
              <div className="cartLeft">
                <div className="cartTitle">Added to your cart</div>
                <div className="cartDetails">
                  {this.props.cartQuantity === 1 ? null : (
                    <div onClick={this.leftScroll} className="prevButton">
                      <i className="buttonLeft"></i>
                    </div>
                  )}
                  <div id="slider" className="cartItems">
                    {this.props.data.map((item, index) => (
                      <CartItems
                        key={index}
                        index={index}
                        cartQuantity={
                          this.props.cartQuantity / this.props.cartQuantity
                        }
                        productName={item.productName}
                        productID={item.productID}
                      />
                    ))}
                  </div>
                  {this.props.cartQuantity === 1 ? null : (
                    <div onClick={this.rightScroll} className="nextButton">
                      <i className="buttonRight"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="cartRight">
                <span className="cartModalClose" onClick={this.props.hideCart}>
                  <p>✖</p>
                </span>
                <div className="cartRightDetails">
                  <div className="cartQuantityModal">
                    <p>Total items added to cart: </p>
                    <p>{this.props.cartQuantity}</p>
                  </div>
                  <button className="cartCheckout">Cart and Checkout</button>
                  <div className="cartAdditional">
                    <p>Free Shipping</p>
                    <p>No minimum purchase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
