import s from './page.module.css'
import Header from '@/shared/components/Header/Header'
import Title from '@/shared/components/Title/Title'
import UsersList from '@/shared/components/UsersList/UsersList'

export default function Home() {
    return (
        <div className={s.page}>
            <div className="container">
                <Header />
                <Title />
                <UsersList />
            </div>
        </div>
    )
}
