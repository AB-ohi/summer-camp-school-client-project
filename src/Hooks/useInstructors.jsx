import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {
    const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const {data: isInstructors, isLoading: isInstructorsLoading } = useQuery({
      queryKey: ['isInstructors', user?.email],
      enabled:!loading,
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/users/instructors/${user?.email}`,
          {headers:{
            authorization: `bearer ${token}`
          }}
        );
        console.log(user.email)
        return res.json();
      },
    })
    return [isInstructors,isInstructorsLoading];
};

export default useInstructors;
// queryFn: async() =>{
//     const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
//     console.log(res.data)
//     return res.data.instructors;

// }