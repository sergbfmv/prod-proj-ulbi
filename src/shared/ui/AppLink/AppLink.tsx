import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (
  {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...props
  }: AppLinkProps,
) => (
  <Link {...props} to={to} className={classNames(s.AppLink, {}, [className, s[theme]])}>
    {children}
  </Link>
);
