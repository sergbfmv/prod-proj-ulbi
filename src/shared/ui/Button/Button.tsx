import {classNames} from "shared/lib/classNames/classNames";
import s from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeBtn {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeBtn
}

export const Button: FC<ButtonProps> = (
    {
        className,
        children,
        theme,
        ...props
    }) => {
    return (
        <button
            {...props}
            className={classNames(s.Button,
                {},
                [className, s[theme]])}>
            {children}
        </button>
    );
};
