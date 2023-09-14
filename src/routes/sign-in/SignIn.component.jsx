import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </>
  );
};

export default SignIn;
