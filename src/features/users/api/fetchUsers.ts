import { UsersResponse } from '../types/types'

export const fetchUsers = async (
  page: number = 1,
  count: number = 6
): Promise<UsersResponse> => {
  const response = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`)
  }

  return response.json()
}
