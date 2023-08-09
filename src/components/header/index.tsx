import { Container } from "../container";

import style from './header.module.css'
import profile from '../../assets/profile.jpeg'

export const Header = () => (
  <header className={style.header}>
      <div>
        <div className={style.background} />
        <div className={style.content}>
          <picture className={style.picture}>
            <img src={profile.src} alt='João Henrique Serodio' />
          </picture>
          <div className={style.info}>
            <h2 className={style.name}> João Henrique Serodio </h2>
            <h3 className={style.employ}> Software Engineer </h3>
          </div>
        </div>
      </div>
  </header>
)
