import { AuthenticationContainer } from "./authentication.styles";

import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
