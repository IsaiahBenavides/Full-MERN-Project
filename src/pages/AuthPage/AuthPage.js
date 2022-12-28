import SingUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {
    return(
        <>
            <h1>AuthPage</h1>
            <SingUpForm setUser={setUser}/>
        </>
    )
}