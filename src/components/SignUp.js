import React, { useEffect, useContext, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserAuthContext from "../context/userAuth/userAuthContext.js";
export default function SignUp({ setLogin,setSignUp }) {
  const userAuthContext = useContext(UserAuthContext);
  const {signup, error } = userAuthContext;
  const [user, setUser] = useState({
    user_email: "",
    user_location: "",
    info: "",
    password: "",
  });
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  const onClickSubmit = async () => {
    if (
      user.user_info === "" ||
      user.user_location === "" ||
      user.user_email === "" ||
      user.password === ""
    ) {
      alert("Please fill the details!!");
    } else {
      await signup(user);
      if(!error) setLogin(true);
      
    }
  };
  return (
    <div className="lg:container mx-auto my-10 font-bold">
      <div className="lg: w-1/3 mx-auto rounded-lg border-light_blue border-8 px-4 py-4 my-4 bg-white">
        <div className="flex flex-row items-center">
          <h1 className="text-3xl text-center w-full ">Sign Up</h1>
          <XMarkIcon
            className="block h-6 w-6 text-black cursor-pointer"
            aria-hidden="true"
            onClick={() => setSignUp(false)}
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
                name="email"
                id="email"
                required={true}
                autoComplete="name"
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="email"
                value={user.user_email}
                onChange={(event) =>
                  setUser({ ...user, user_email: event.target.value })
                }
              />
            </div>
          </div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Location
          </h2>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="location"
                id="location"
                required={true}
                autoComplete="location"
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="location"
                value={user.user_location}
                onChange={(event) =>
                  setUser({ ...user, user_location: event.target.value })
                }
              />
            </div>
          </div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Information
          </h2>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="information"
                id="information"
                required={true}
                autoComplete="information"
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="information"
                value={user.information}
                onChange={(event) =>
                  setUser({ ...user, user_info: event.target.value })
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
        <button
          // type="submit"
          className="bg-blue-100 text-white px-2 w-full border-2 rounded-lg py-2 hover:bg-blue-200"
          onClick={onClickSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
