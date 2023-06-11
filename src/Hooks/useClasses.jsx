import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
            const {data: classes = [], isLoading: Loading, refetch} = useQuery({
    queryKey: ['classes'],
    queryFn: async() => {
      const res = await fetch('https://summer-camp-school-server-project-ab-ohi.vercel.app/classes')
      return res.json()
    }
  })
  return [classes, Loading, refetch];
    
};

export default useClasses;