import React from "react"
import { useState, useEffect } from "react"
const UserContext = React.createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        fetch("/me")
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                console.log('no user attached to current session')
            }
        })
    }, [])
    const login = (user) => {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                console.log('errors', r)
            }
        })
    }
    console.log('logged in as', user)
    const logout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        .then(() => setUser(false))
    }
    return ( 
        <UserContext.Provider value = {{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export  { UserContext, UserProvider }