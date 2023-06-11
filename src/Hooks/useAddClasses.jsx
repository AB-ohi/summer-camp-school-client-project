import { useQuery } from '@tanstack/react-query'
import { useContext } from "react"
import useAxiosSecure from './useAxiosSecure/useAxiosSecure'
import { AuthContext } from '../provider/AuthProvider'

const useAddClasses =() =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data:classSelect=[]} = useQuery({
        queryKey: ['classSelect', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure(`/classSelect?email=${user.email}`)
            return res.data
        },
      })
      return[classSelect, refetch]
    
}

export default useAddClasses;