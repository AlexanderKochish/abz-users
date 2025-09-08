'use client'
import React, { useEffect } from 'react'
import s from './UsersList.module.css'
import { User } from '../../types/types'
import UserCard from '../UserCard/UserCard'
import Button from '@/shared/components/ui/Button/Button'
import { usePaginatedUsers } from '../../hooks/usePaginatedUsers'
import Preloader from '@/shared/components/ui/Preloader/Preloader'

type Props = {
  users: User[]
}

const UsersList = ({ users }: Props) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    scrollTargetRef,
    scrollToNewItems,
  } = usePaginatedUsers({
    initialUsers: users,
  })

  useEffect(() => {
    if (!isFetchingNextPage && data.length > users.length) {
      scrollToNewItems()
    }
  }, [
    isFetchingNextPage,
    data.length,
    users.length,
    scrollTargetRef,
    scrollToNewItems,
  ])

  return (
    <div>
      <div className={s.list}>
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {isFetchingNextPage && <Preloader />}

      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Show more
      </Button>
      <div ref={scrollTargetRef} className={s.scrollTarget} />
    </div>
  )
}

export default UsersList
