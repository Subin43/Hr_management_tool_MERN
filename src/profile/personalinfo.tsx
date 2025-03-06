import { useSelector } from "react-redux"
import { RootState } from "../redux-store/store"


const PersonalInfo = () => {
    const user = useSelector((state : RootState) => state.user.user)
    console.log("User", user)
  return (
    <div>
       <h2 className="top-20 left-60">{user?.firstname} {user?.lastname}</h2>

    </div>
  )
}

export default PersonalInfo