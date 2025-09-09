import { API_URL } from '@/shared/constants'
import { UserResponse, UsersResponse } from '../types/types'
import { ApiErrorResponse } from '@/shared/types/types'

export const fetchUsers = async (
  page: number = 1,
  count: number = 6
): Promise<UsersResponse | ApiErrorResponse> => {
  const response = await fetch(`${API_URL}/users?page=${page}&count=${count}`)

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Page not found')
    }
    if (response.status === 422) {
      throw new Error('Validation failed')
    }
    throw new Error(`Failed to fetch users: ${response.status}`)
  }

  return response.json()
}

export const fetchUserById = async (id: number): Promise<UserResponse> => {
  const response = await fetch(`${API_URL}/users/${id}`)

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('The user with the requested id does not exist.')
    }
    if (response.status === 404) {
      throw new Error('User not found')
    }
    throw new Error(`Failed to fetch users: ${response.status}`)
  }

  return response.json()
}
