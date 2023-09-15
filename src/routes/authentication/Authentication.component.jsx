import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";

// style sheet
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
