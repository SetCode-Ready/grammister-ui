import React, { createContext } from "react"

interface AuthProps {
  children: React.ReactNode
}

interface AuthContextProps {
  saveTokenOnLocalStorage: (fieldName: string, token: any) => void
  getTokenOnLocalStorage: (item: string) => string
  removeTokenOnLocalStorage: (item: string) => void
}
export const AuthContext = createContext({} as AuthContextProps)


export default function Auth({children}: AuthProps) {
  function saveTokenOnLocalStorage(fieldName: string, token: any){
    window.localStorage.setItem(fieldName, JSON.stringify(token) )
  }

  function getTokenOnLocalStorage(item: string){
    return JSON.parse(window.localStorage.getItem(item)!)   
  }

  function removeTokenOnLocalStorage(item: string){
    window.localStorage.removeItem(item)
  }

  return (
    <AuthContext.Provider value={{
      saveTokenOnLocalStorage,
      getTokenOnLocalStorage,
      removeTokenOnLocalStorage
    }}>
      {children}
    </AuthContext.Provider>
  )
}
