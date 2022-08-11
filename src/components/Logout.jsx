import { useContext } from "react"
import { UserInfoContext } from "../App"

export default function Logout() {
    const { setUser, setUserIsLoggedIn } = useContext(UserInfoContext)
    const handleLogout = () => {
        setUserIsLoggedIn(false)
        setUser(null)
        
    }
    return <button onClick={handleLogout}>Logout</button>
}