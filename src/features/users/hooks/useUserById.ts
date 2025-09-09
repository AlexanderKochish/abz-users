import { useQuery } from '@tanstack/react-query'
import { fetchUserById } from '../api/fetchUsers'
import { UserResponse } from '../types/types'

export const useUserById = (id: number) => {
  const { data, ...rest } = useQuery<UserResponse>({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
    retry: 1,
  })

  return {
    selectedUser: data?.user,
    ...rest,
  }
}
