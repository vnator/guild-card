import { Container } from "../container";

import style from './header.module.css'

export const Header = () => (
  <header className={style.header}>
    <Container>
      <div>
        <div className={style.background} />
        <div className={style.content}>cabeçalho</div>
      </div>
    </Container>
  </header>
)
