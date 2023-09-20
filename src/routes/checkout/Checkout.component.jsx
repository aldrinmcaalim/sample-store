import { Fragment } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  return (
    <Fragment>
      <h2>Checkout</h2>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <Fragment key={cartItem.id}>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
              <span>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Checkout;
