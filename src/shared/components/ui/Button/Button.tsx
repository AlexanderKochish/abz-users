import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Button.module.css'
import clsx from 'clsx'

type Props<T extends ElementType> = {
    as?: T
    children: ReactNode
    className?: string
} & ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = 'button'>({
    children,
    as,
    className,
    ...rest
}: Props<T>) => {
    const Component = as || 'button'
    return (
        <Component className={clsx(s.btn, className)} {...rest}>
            {children}
        </Component>
    )
}

export default Button
