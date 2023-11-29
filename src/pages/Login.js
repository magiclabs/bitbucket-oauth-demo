import { magic } from "../lib/magic";
import { FaBitbucket } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "bitbucket",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + Bitbucket</h1>
      <button onClick={handleSocialLogin}>
        <FaBitbucket size={"2.5rem"} />
        Log in with Bitbucket
      </button>
    </div>
  );
};

export default Login;
