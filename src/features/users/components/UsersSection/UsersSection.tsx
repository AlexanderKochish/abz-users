import React from 'react'
import s from './UsersSection.module.css'
import Typography from '@/shared/components/ui/Typography/Typography'
import { fetchUsers } from '../../api/fetchUsers'
import UsersClient from '../UsersClient/UsersClient'

const UsersSection = async () => {
  const users = await fetchUsers()
  return (
    <section className={s.users}>
      <div className="container">
        <div className={s.content}>
          <Typography variant="h1" as="h2" className={s.title}>
            Working with GET request
          </Typography>
          <UsersClient users={users.users} />
        </div>
      </div>
    </section>
  )
}

export default UsersSection
