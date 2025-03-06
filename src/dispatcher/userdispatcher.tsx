import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios"
import { setUser } from '../redux-slice/userslice';
const UserDispatcher = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUserdata = async() => {
            try {
            const response = await axios.get("/https://jsonplaceholder.org/users")
            if (!response.data){
                console.log("Invalid response data")
            }
            dispatch(setUser(response.data))
            }
            catch(err){
                console.log(err)
            }

        }
        fetchUserdata();
    },[dispatch])
  return (
    <div>

    </div>
  )
}

export default UserDispatcher