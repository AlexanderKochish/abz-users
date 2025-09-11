'use client'
import React, { useEffect } from 'react'
import s from './UsersList.module.css'
import { User } from '../../types/types'
import UserCard from '../UserCard/UserCard'
import Button from '@/shared/components/ui/Button/Button'
import { usePaginatedUsers } from '../../hooks/usePaginatedUsers'
import Preloader from '@/shared/components/ui/Preloader/Preloader'
import DialogModal from '@/shared/components/ui/DialogModal/DialogModal'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import UserDetails from '../UserDetails/UserDetails'

import { useUserById } from '../../hooks/useUserById'
import ErrorState from '@/shared/components/ErrorState/ErrorState'

const UsersList = () => {
  const { setQueryParam, getQueryParam } = useQueryParams()
  const urlUserId = Number(getQueryParam('user'))
  const { selectedUser } = useUserById(urlUserId)
  const {
    data,
    fetchNextPage,
    hasNextPage,
    scrollTargetRef,
    isFetchingNextPage,
    scrollToNewItems,
    error,
    isError,
  } = usePaginatedUsers()

  const handleUserClick = (user: User) => {
    setQueryParam('user', user.id.toString())
  }

  const handleCloseModal = () => {
    setQueryParam('user', null)
  }

  if (isError) {
    return <ErrorState title="Failed to get users" initialError={error} />
  }

  return (
    <div className={s.usersList}>
      <div className={s.list}>
        {data.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => handleUserClick(user)}
          />
        ))}
      </div>

      {isFetchingNextPage && <Preloader />}

      <Button
        onClick={async () => {
          await fetchNextPage()
          scrollToNewItems()
        }}
        disabled={!hasNextPage}
      >
        Show more
      </Button>

      <div ref={scrollTargetRef} className={s.scrollTarget} />

      <DialogModal
        open={!!selectedUser}
        onOpenChange={(open) => {
          if (!open) handleCloseModal()
        }}
        title="User Details"
        description={selectedUser ? <UserDetails user={selectedUser} /> : null}
      />
    </div>
  )
}

export default UsersList
