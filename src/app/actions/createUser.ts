'use server'

import { ApiResponse } from '@/features/create-user-form/types/types'
import { API_URL } from '@/shared/constants'
import { revalidatePath } from 'next/cache'

export const createUser = async (formData: FormData): Promise<ApiResponse> => {
  const tokenResponse = await fetch(`${API_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    cache: 'no-store',
  })

  const { token, success } = await tokenResponse.json()

  if (!success) {
    return { success: false, message: "'Failed to get token" }
  }

  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      Token: token,
    },
    body: formData,
  })

  const data: ApiResponse = await response.json()

  if (response.status === 201 && data.success) {
    revalidatePath('/')
    return data
  }

  if (response.status === 401) {
    return { success: false, message: 'Session expired. Please try again.' }
  }

  if (response.status === 409) {
    return {
      success: false,
      message: 'A user with this phone or email already exists',
    }
  }

  return {
    success: false,
    message: data.message || 'Unknown error while creating user',
  }
}
