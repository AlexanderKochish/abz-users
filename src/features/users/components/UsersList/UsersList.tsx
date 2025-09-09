'use client'
import React, { useEffect, useState } from 'react'
import s from './UsersList.module.css'
import { User } from '../../types/types'
import UserCard from '../UserCard/UserCard'
import Button from '@/shared/components/ui/Button/Button'
import { usePaginatedUsers } from '../../hooks/usePaginatedUsers'
import Preloader from '@/shared/components/ui/Preloader/Preloader'
import DialogModal from '@/shared/components/ui/DialogModal/DialogModal'
import Typography from '@/shared/components/ui/Typography/Typography'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import UserDetails from '../UserDetails/UserDetails'

import { useUserById } from '../../hooks/useUserById'

type Props = {
  users: User[]
}

const UsersList = ({ users }: Props) => {
  const { setQueryParam, getQueryParam } = useQueryParams()
  const urlUserId = Number(getQueryParam('user'))
  const { selectedUser } = useUserById(urlUserId)
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    scrollTargetRef,
    scrollToNewItems,
    setDialogOpen,
    isDialogOpen,
    isError,
    error,
  } = usePaginatedUsers({
    initialUsers: users,
  })

  const handleUserClick = (user: User) => {
    setQueryParam('user', user.id.toString())
  }

  const handleCloseModal = () => {
    setQueryParam('user', null)
  }

  useEffect(() => {
    if (isError) {
      setDialogOpen(true)
    }
  }, [isError, setDialogOpen])

  useEffect(() => {
    if (!isFetchingNextPage && data.length > users.length) {
      scrollToNewItems()
    }
  }, [isFetchingNextPage, data.length, users.length, scrollToNewItems])

  return (
    <div>
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

      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
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

      <DialogModal
        onOpenChange={setDialogOpen}
        open={isDialogOpen}
        title="Error"
        description={
          <Typography variant="body" as="p">
            {error?.message}
          </Typography>
        }
      />
    </div>
  )
}

export default UsersList
