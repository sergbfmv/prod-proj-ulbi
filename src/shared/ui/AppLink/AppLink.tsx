import {classNames} from "shared/lib/classNames/classNames";
import s from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

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
    }: AppLinkProps) => {
    return (
        <Link {...props} to={to} className={classNames(s.AppLink, {}, [className, s[theme]])}>
            {children}
        </Link>
    );
};
