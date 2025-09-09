import { API_URL } from '@/shared/constants'
import { PositionsResponse } from '../types/types'

export const fetchPosition = async (): Promise<PositionsResponse> => {
  const response = await fetch(`${API_URL}/positions`)

  if (!response.ok) {
    if (response.status === 404 || response.status === 422) {
      throw new Error('Positions not found')
    }
    throw new Error('Failed to fetch positions')
  }

  return response.json()
}
