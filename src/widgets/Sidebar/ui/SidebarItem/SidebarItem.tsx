import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from 'widgets/Sidebar/ui/Sidebar/Sidebar.module.scss';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({
  item,
  collapsed,
}: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(s.item, { [s.collapsed]: collapsed })}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
