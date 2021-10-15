import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean,
    disabled?: boolean,
    name?: string | undefined
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled, name,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <>
            <button
                className={finalClassName}
                disabled={disabled}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            >{name}</button>
        </>

    )
}

