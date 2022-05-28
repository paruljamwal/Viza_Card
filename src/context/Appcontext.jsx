import {createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [data,setData]=useState({})
  const handelsetdata=(newdata)=>{
     setData(newdata)
  }
  console.log(data)
  return (
    <AppContext.Provider value={{data,handelsetdata}}>
      {children}
    </AppContext.Provider>
  );
};