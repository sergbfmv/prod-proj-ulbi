import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ThemeBtn {
    CLEAR = 'clear',
    OUTLINE = 'outline'
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
  },
) => (
  <button
    type="button"
    {...props}
    className={classNames(
      s.Button,
      {},
      [className, s[theme]],
    )}
  >
    {children}
  </button>
);
