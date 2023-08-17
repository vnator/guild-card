import { Container } from "../container";

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
              <h2 className={style.name}>{t('me.name')}</h2>
              <h3 className={style.employ}>{t('me.employ')}</h3>
            </div>
          </div>
        </div>
    </header>
  )
}
