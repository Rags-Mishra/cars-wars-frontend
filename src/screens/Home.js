import React, { useState,useContext,useEffect } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import car from '../assests/images/car1.png';
import { useNavigate } from "react-router-dom";
import UserAuthContext from "../context/userAuth/userAuthContext";
function Home() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const userAuthContext=useContext(UserAuthContext);
  const{isAuthenticated}=userAuthContext;
  let navigate = useNavigate();
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/cars-catalogue');
    }
    
  },[isAuthenticated])
  return (
    <>
    <div className="  text-center flex justify-center flex-col items-center">
        <p className="text-5xl margin-auto">
        Welcome to Cars-Wars!
        </p>
        <img className="self-center border-transparent" src={car} alt="car.jpg"/>
        <p className="text-4xl">Your one step solution to purchase your dream car!</p>
        <button onClick={()=>setLogin(true)}
            className="bg-blue-100 text-white px-2 my-10 w-1/2 border-2 rounded-lg py-2 hover:bg-blue-200"
        
        >Let's get started with signing you up!</button>
    </div>
      {login ? (
        <>
          <div className="bg-black absolute inset-0 opacity-80 z-10"></div>
          <div className="absolute z-20 inset-0 flex justify-center items-center">
            <Login setLogin={setLogin} setSignUp={setSignUp}/>
          </div>
        </>
      ) : null}
      {signUp ? (
        <>
          <div className="bg-black absolute inset-0 opacity-80 z-10"></div>
          <div className="absolute z-20 inset-0 flex justify-center items-center">
            <SignUp setSignUp={setSignUp} setLogin={setLogin}/>
          </div>
        </>
      ) : null}
    </>
  );
}
export default Home;
