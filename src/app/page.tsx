import s from './page.module.css'
import Header from '@/shared/components/Header/Header'
import Title from '@/shared/components/Title/Title'
import UsersSection from '@/features/users/components/UsersSection/UsersSection'

export default function Home() {
  return (
    <div className={s.page}>
      <div className="container">
        <Header />
        <Title />
        <UsersSection />
      </div>
    </div>
  )
}
