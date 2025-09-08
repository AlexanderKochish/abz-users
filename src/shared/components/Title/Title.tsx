import React from 'react'
import s from './Title.module.css'
import Typography from '../ui/Typography/Typography'

const Title = () => {
    return (
        <section className={s.title}>
            <div className={s.content}>
                <Typography variant="h1" as="h1">
                    Test assignment for <br /> front-end developer
                </Typography>
                <Typography>
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they&apos;ll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving.
                </Typography>
            </div>
        </section>
    )
}

export default Title
