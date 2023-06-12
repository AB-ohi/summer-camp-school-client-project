import { useQuery } from "@tanstack/react-query";

const useTopIns = () => {
    const {data: ins = [], isLoading: Loading, refetch} = useQuery({
        queryKey: ['ins'],
        queryFn: async() => {
          const res = await fetch('https://summer-camp-school-server-project-ab-ohi.vercel.app/Instructors')
          return res.json()
        }
      })
      return [ins, Loading, refetch];
};

export default useTopIns;