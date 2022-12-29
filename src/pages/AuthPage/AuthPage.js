import { useState } from "react"
import LogInForm from "../../components/LogInForm/LogInForm.js"
import SingUpForm from "../../components/SignUpForm/SignUpForm.js"

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)
    return(
        <>
            <h3 onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'SIGN UP': 'LOG IN'} </h3>
            {showLogin ? <LogInForm setUser={setUser}/> : <SingUpForm setUser={setUser}/>}
        </>
    )
}