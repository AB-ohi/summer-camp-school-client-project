import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useInstructors = () => {
    const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const {data: isInstructors, isLoading: isInstructorsLoading } = useQuery({
      queryKey: ['isInstructors', user?.email],
      enabled:!loading,
      queryFn: async () => {
        const res = await fetch(
          `https://summer-camp-school-server-project-ab-ohi.vercel.app/users/instructors/${user?.email}`,
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