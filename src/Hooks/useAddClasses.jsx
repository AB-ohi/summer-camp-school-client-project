import { useQuery } from '@tanstack/react-query'
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import useAxiosSecure from './useAxiosSecure/axiosSecure'

const useAddClasses =() =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const ax = useAxiosSecure()

    const { refetch, data:classSelect=[]} = useQuery({
        queryKey: ['classSelect', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/classSelect?email=${user.email}`,
            {headers:{
                authorization:`bearer ${token}`
              }}
            )
            return res.json()
        },
      })
      return[classSelect, refetch]
    
}

export default useAddClasses;