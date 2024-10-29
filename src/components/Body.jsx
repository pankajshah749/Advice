import React, { useEffect, useState } from "react";
import { FaDiceSix } from "react-icons/fa";
const Body = () => { 

    const [advice,setadvice]=useState('');

    const handleAdvice= async()=>{
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsondata=await response.json();
        const { slip } = jsondata;
        setadvice(slip);
    };
    
    useEffect(() =>{
        handleAdvice();
    }, []);
    // two parameters inside the useeffects, first is a function and second is the dependencyarray

    return (
        <div className="h-screen bg-slate-800 flex justify-center items-center">
        <div className="bg-white h-fit w-[320px] rounded-lg p-8">
          <p className="text-4xl text-center">Advice #{advice.id}</p>
          <p className="font-bold text-3xl mt-2"> "{advice.advice}"</p>
          <div className="flex justify-center m-2">
          <button onClick={handleAdvice}className="bg-lime-400 p-2 rounded-full">
          <FaDiceSix />
          </button>
          </div>
        </div>
      </div>
    )
};

export default Body;
