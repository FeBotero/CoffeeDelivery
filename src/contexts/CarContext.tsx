import { ReactNode, createContext, useState } from "react";

type IPRoduct={
  name:string;
  type:string[];
  description:string;
  imgURL:string;
  qtdUnits:number;
  price:number
}


interface CarType{
  products:IPRoduct[];
  setProducts:(data:IPRoduct[])=>void;
}


export const CarsContext = createContext({} as CarType )

interface CarContextProveiderProps{
  children:ReactNode
}

export function CarContextProvider({
  children,
}:CarContextProveiderProps){

  
  
  return(
    <CarsContext.Provider
      value={{}}
    >
      {children}
    </CarsContext.Provider>
  )
}