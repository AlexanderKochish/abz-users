import React from 'react'
import s from './UsersSection.module.css'
import Typography from '@/shared/components/ui/Typography/Typography'
import { fetchUsers } from '../../api/fetchUsers'
import UsersClient from '../UsersClient/UsersClient'
import { User } from '../../types/types'

const UsersSection = async () => {
  let initialUsers: User[] = []
  let error: Error | null = null

  try {
    const response = await fetchUsers()
    if (response.success) {
      initialUsers = response.users
    } else {
      error = new Error('API returned unsuccessful response')
    }
  } catch (err) {
    error = err instanceof Error ? err : new Error('Unknown error')
  }

  return (
    <section className={s.users} id="users">
      <div className={s.content}>
        <Typography variant="h1" as="h2" className={s.title}>
          Working with GET request
        </Typography>

        <UsersClient users={initialUsers} initialError={error} />
      </div>
    </section>
  )
}

export default UsersSection
