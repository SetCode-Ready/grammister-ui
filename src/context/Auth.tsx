import React, { createContext } from "react"

interface AuthProps {
  children: React.ReactNode
}

interface AuthContextProps {
  saveTokenOnLocalStorage: (fieldName: string, token: string) => void
  getTokenOnLocalStorage: () => string
}
export const AuthContext = createContext({} as AuthContextProps)


export default function Auth({children}: AuthProps) {
  function saveTokenOnLocalStorage(fieldName: string, token: string){
    window.localStorage.setItem(fieldName, JSON.stringify(token) )
  }

  function getTokenOnLocalStorage(){
    return JSON.parse(window.localStorage.getItem('token')!)   
  }

  return (
    <AuthContext.Provider value={{
      saveTokenOnLocalStorage,
      getTokenOnLocalStorage
    }}>
      {children}
    </AuthContext.Provider>
  )
}
