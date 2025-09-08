import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './Typography.module.css'

type Variant = 'h1' | 'body'

type Props<T extends ElementType> = {
    as?: T
    children: ReactNode
    variant?: Variant
    className?: string
} & ComponentPropsWithoutRef<T>

const defaultElement: Record<Variant, ElementType> = {
    h1: 'h1',
    body: 'p',
}

const Typography = <T extends ElementType = 'p'>({
    as,
    children,
    variant = 'body',
    className,
    ...rest
}: Props<T>) => {
    const Component = as || defaultElement[variant]

    return (
        <Component className={clsx(s[variant], className)} {...rest}>
            {children}
        </Component>
    )
}

export default Typography
