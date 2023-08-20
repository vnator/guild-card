import style from './header.module.css'
import profile from '../../assets/profile.jpeg'
import { useIntl } from "../../context/useInlt";

export const Header = () => {
  const t = useIntl();

  return (
    <header className={style.header}>
        <div>
          <div className={style.background} />
          <div className={style.content}>
            <picture className={style.picture}>
              <img src={profile.src} alt={t('me.name')} />
            </picture>
            <div className={style.info}>
              <h1 className={style.name}>{t('me.name')}</h1>
              <h2 className={style.employ}>{t('me.employ')}</h2>
            </div>
          </div>
        </div>
    </header>
  )
}
