import React, { useContext, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserAuthContext from "../context/userAuth/userAuthContext.js";
export default function Login({ setLogin, setSignUp }) {
  const userAuthContext = useContext(UserAuthContext);
  const { login } = userAuthContext;
  const [user, setUser] = useState({
    user_email: "",
    password: "",
  });
  const [type, setType] = useState("");
  const onClickSubmit = async () => {
    if (type === "users") {
      if (user.user_email === "" || user.password === "") {
        alert("Please fill the details!!");
      } else {
        await login(
          { user_email: user.user_email, password: user.password },
          type
        );
        setLogin(false);
      }
    } else if (type === "admin")
      if (user.user_email === "" || user.password === "") {
        alert("Please fill the details!!");
      } else {
        await login(
          { admin_id: user.user_email, password: user.password },
          type
        );
        setLogin(false);
        // navigate('/cars-catalogue');
      }
  };
  return (
    <div className="lg:container lg:w-1/4 lg:bg-transparent lg:mx-auto lg:my-10 lg:font-bold sm:container sm:w-full sm:mx-5 sm:bg-blue-100">
      <div className="lg: w-1/3 mx-auto rounded-lg border-light_blue border-8 px-4 py-4 my-4 bg-white sm: w-full">
        <div className="flex flex-row items-center">
          <h1 className="text-3xl text-center w-full ">Login</h1>
          <XMarkIcon
            className="block h-6 w-6 text-black cursor-pointer"
            aria-hidden="true"
            onClick={() => setLogin(false)}
          />
        </div>
        <div className="flex lg: w-full flex-col pb-12 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Email
          </h2>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="user_email"
                id="user_email"
                required={true}
                autoComplete="user_email"
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="user_email"
                value={user.user_email}
                onChange={(event) =>
                  setUser({ ...user, user_email: event.target.value })
                }
              />
            </div>
          </div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Password
          </h2>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="password"
                name="password"
                id="password"
                required={true}
                autoComplete="password"
                className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="password"
                value={user.password}
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between my-1">
          <button
            className="w-1/4 px-2 py-2 border-solid border-2 border-blue-100 rounded hover:bg-blue-100 hover:text-white focus:bg-blue-100 focus:text-white"
            onClick={() => setType("admin")}
          >
            Admin
          </button>
          <button
            className=" w-1/4 px-2 py-2 border-solid border-2 border-blue-100 rounded hover:bg-blue-100 hover:text-white focus:bg-blue-100 focus:text-white"
            onClick={() => setType("users")}
          >
            User
          </button>
          <button
            className=" w-1/4 px-2 py-2 border-solid border-2 border-blue-100 rounded hover:bg-blue-100 hover:text-white focus:bg-blue-100 focus:text-white"
            onClick={() => setType("dealership")}
          >
            Dealer
          </button>
        </div>
        <button
          // type="submit"
          className="bg-blue-100 text-white px-2 w-full border-2 rounded-lg py-2 my-6 hover:bg-blue-200 sm:my-5 "
          onClick={onClickSubmit}
        >
          Submit
        </button>
        <div className="flex flex-col my-3">
          <p className="text-center">Haven't got an account?</p>
          <button
            onClick={() => {
              setLogin(false);
              setSignUp(true);
            }}
            className="self-center text-dark_blue"
          >
            SignUp here
          </button>
        </div>
      </div>
    </div>
  );
}
