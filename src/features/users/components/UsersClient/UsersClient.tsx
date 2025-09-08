'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UsersList from '../UsersList/UsersList'
import { User } from '../../types/types'

const queryClient = new QueryClient()
type Props = {
  users: User[]
}
const UsersClient = ({ users }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList users={users} />
    </QueryClientProvider>
  )
}

export default UsersClient
