import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("wow", currentUser);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
