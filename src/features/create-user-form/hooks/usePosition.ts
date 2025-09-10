import { useQuery } from '@tanstack/react-query'
import { fetchPosition } from '../api/fetchPosition'
import { PositionsResponse } from '../types/types'

export const usePosition = () => {
  const { data, ...rest } = useQuery<PositionsResponse, Error>({
    queryKey: ['positions'],
    queryFn: fetchPosition,
    retry: 1,
  })

  return {
    data,
    ...rest,
  }
}
