import { useContext } from "react"
import { UserInfoContext } from "../App"
import Welcome from "./Welcome"

export default function Hero() {
    const {isLoggedIn} = useContext(UserInfoContext)
    return (isLoggedIn) ? <Welcome /> : <Guest />
    
}

