import { ApiErrorResponse } from '@/shared/types/types'

export type Position = {
  id: number
  name: string
}

export type PositionsResponse = {
  success: boolean
  positions: Position[]
}

export type ApiResponse =
  | {
      success: true
      user_id: number
      message: string
    }
  | ApiErrorResponse
