import { useContext } from "react"
import { UserInfoContext } from "../App"

export default function Login() {
    const { setUser, setUserIsLoggedIn } = useContext(UserInfoContext)
    const handleLogin = () => {
        setUserIsLoggedIn(true)
        setUser({name: 'Johnathan', position: 'Drums', band: 'Lane Branden'})
        
    }
    return <button onClick={handleLogin}>Login</button>
}