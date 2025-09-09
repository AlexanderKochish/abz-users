export type User = {
  id: number
  name: string
  email: string
  phone: string
  position: string
  position_id: number
  registration_timestamp: number
  photo: string
}

export type Links = {
  next_url: string | null
  prev_url: string | null
}

export type UsersResponse = {
  success: boolean
  total_pages: number
  total_users: number
  count: number
  page: number
  links: Links
  users: User[]
}

export type UserResponse = {
  success: boolean
  user: User
}
