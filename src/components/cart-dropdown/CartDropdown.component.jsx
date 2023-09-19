import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;