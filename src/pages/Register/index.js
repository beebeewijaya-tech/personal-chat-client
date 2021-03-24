import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Notify } from "../../components";
import Constants from "../../constants";

import { REGISTER_USER } from "../../graphql/mutations";

function Register() {
  const history = useHistory();

  // Apollo Mutations
  const [registerMutation, { loading }] = useMutation(REGISTER_USER, {
    onCompleted() {
      history.push("/login");
    },
    onError(error) {
      setNotify({
        title: Constants.NOTIFY.TITLE.SUCCESS,
        body: error.message,
      });
    },
  });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [notify, setNotify] = useState({
    title: "",
    body: "",
  });

  const onValidate = () => {
    if (password.length < 6) {
      setPasswordError("Password should be 6 characters or more");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation({ variables: { fullname, email, password } });
  };

  return (
    <section className="bg-gray-100	flex min-h-screen items-center px-3">
      {notify.title && <Notify {...notify} />}
      <section className="container mx-auto">
        <h4 className="text-black-500 text-xl text-center">Register User</h4>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/4 xl:w-1/3 mx-auto text-center"
        >
          <section className="w-full items-center pr-3">
            <input
              className="bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-full mt-5 py-2 px-4 rounded shadow-lg"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </section>
          <section className="w-full items-center pr-3">
            <input
              className="bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-full mt-5 py-2 px-4 rounded shadow-lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section className="w-full items-center pr-3 mb-5">
            <input
              className="bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-full mt-5 py-2 px-4 rounded shadow-lg"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <button
            disabled={loading}
            className="bg-primary hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 w-2/6 text-white py-2 px-6 rounded"
          >
            Sign up
          </button>
        </form>
        <section>
          <p className="text-center mt-5">
            <Link className="text-primary" to="/login">
              Go to Login
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
}

export default Register;
