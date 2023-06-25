import { ReactNode, createContext, useState } from "react";

interface ProductType{
  name:string;
  type:string[];
  description:string;
  price:number;
  qtd:number;
  setQtd:(qtd:number)=>void
}


export const ProductsContext = createContext({} as ProductType )

interface ProductContextProveiderProps{
  children:ReactNode
}

export function ProductsContextProvider({
  children,
}:ProductContextProveiderProps){

  const [qtd,setQtd]=useState(0)
  const name = "Tradicional"
  const type = ["Tradicional","Com leite"]
  const description = "Tradicional"
  const price = 9.90
  return(
    <ProductsContext.Provider
      value={{name,type,description,price,setQtd,qtd}}
    >
      {children}
    </ProductsContext.Provider>
  )
}