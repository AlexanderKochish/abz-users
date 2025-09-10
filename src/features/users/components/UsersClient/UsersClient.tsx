'use client'
import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UsersList from '../UsersList/UsersList'
import { User } from '../../types/types'
import CreateUserFormSection from '@/features/create-user-form/components/CreateUserFormSection/CreateUserFormSection'
import Preloader from '@/shared/components/ui/Preloader/Preloader'

const queryClient = new QueryClient()
type Props = {
  users: User[]
  initialError?: Error | null
}
const UsersClient = ({ users, initialError }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Preloader />}>
        <UsersList users={users} initialError={initialError} />
      </Suspense>
      <CreateUserFormSection />
    </QueryClientProvider>
  )
}

export default UsersClient
