import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import { UserContext } from "../../contexts/User.context";
import { CartContext } from "../../contexts/Cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  // console.log("wow", currentUser);
  // console.log("ouch", isCartOpen);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
