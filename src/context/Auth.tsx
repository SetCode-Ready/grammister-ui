import React, { createContext } from "react"

interface AuthProps {
  children: React.ReactNode
}

interface AuthContextProps {
  saveTokenOnLocalStorage: (fieldName: string, token: string) => void
  getTokenOnLocalStorage: () => string
  removeTokenOnLocalStorage: (item: string) => void
}
export const AuthContext = createContext({} as AuthContextProps)


export default function Auth({children}: AuthProps) {
  function saveTokenOnLocalStorage(fieldName: string, token: string){
    window.localStorage.setItem(fieldName, JSON.stringify(token) )
  }

  function getTokenOnLocalStorage(){
    return JSON.parse(window.localStorage.getItem('token')!)   
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
