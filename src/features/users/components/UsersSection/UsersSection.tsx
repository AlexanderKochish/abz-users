import React, { Suspense } from 'react'
import s from './UsersSection.module.css'
import Typography from '@/shared/components/ui/Typography/Typography'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { fetchUsers } from '../../api/fetchUsers'
import Preloader from '@/shared/components/ui/Preloader/Preloader'
import UsersList from '../UsersList/UsersList'
import CreateUserFormSection from '@/features/create-user-form/components/CreateUserFormSection/CreateUserFormSection'

const UsersSection = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => fetchUsers(pageParam),
    initialPageParam: 1,
  })
  return (
    <section className={s.users} id="users">
      <div className={s.content}>
        <Typography variant="h1" as="h2" className={s.title}>
          Working with GET request
        </Typography>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<Preloader />}>
            <UsersList />
          </Suspense>
          <CreateUserFormSection />
        </HydrationBoundary>
      </div>
    </section>
  )
}

export default UsersSection
