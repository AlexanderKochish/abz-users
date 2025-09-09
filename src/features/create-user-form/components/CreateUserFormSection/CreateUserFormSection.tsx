import React from 'react'
import s from './CreateUserFormSection.module.css'
import Typography from '@/shared/components/ui/Typography/Typography'
import CreateUserForm from '../CreateUserForm/CreateUserForm'

const CreateUserFormSection = () => {
  return (
    <section className={s.formSection} id="form">
      <Typography variant="h1" as="h3" className={s.title}>
        Working with POST request
      </Typography>
      <CreateUserForm />
    </section>
  )
}

export default CreateUserFormSection
