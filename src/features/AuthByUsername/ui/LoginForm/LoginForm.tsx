import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t('Введите имя пользователя')}
        type="text"
        className={s.input}
      />
      <Input placeholder={t('Введите пароль')} type="text" className={s.input} />
      <Button className={s.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
